import { Prisma } from '@prisma/client';
import { Context } from '../../context';
import {
  WorkoutExercise,
  WorkoutExerciseInput,
  WorkoutInput,
} from './workout.type';

const getWorkoutMuscleGroups = workout => ({
  ...workout,
  muscleGroups: Array.from(
    new Set(workout.exercises.map(({ exercise }) => exercise.muscleGroup.name))
  ),
});

export const getWorkoutsByUserId = async (userId: string, ctx: Context) => {
  const workouts = await ctx.prisma.workout.findMany({
    where: { userId },
    include: {
      exercises: {
        include: {
          exercise: {
            include: { muscleGroup: true },
          },
        },
      },
      user: true,
    },
  });

  return workouts.map(workout => getWorkoutMuscleGroups(workout));
};

export const getWorkoutById = async (id: string, ctx: Context) => {
  const workout = await ctx.prisma.workout.findUnique({
    where: { id },
    include: {
      exercises: {
        include: {
          exercise: {
            include: { muscleGroup: true },
          },
        },
      },
      user: {
        include: {
          profileInfo: true,
        },
      },
    },
  });

  return getWorkoutMuscleGroups(workout);
};

export const createWorkout = async (workout: WorkoutInput, ctx: Context) => {
  const createdWorkout =
    await ctx.prisma.workout.create<Prisma.WorkoutCreateArgs>({
      data: {
        name: workout.name,
        description: workout?.description || '',
        exercises: {
          create: workout.exercises.map((data: WorkoutExerciseInput) => ({
            sets: data.sets,
            rest: data.rest,
            repetitions: data.repetitions,
            notes: data?.notes || '',
            exercise: {
              connect: { id: data.exerciseId },
            },
          })),
        },
        user: {
          connect: { id: workout.userId },
        },
      },
      include: {
        exercises: {
          include: {
            exercise: {
              include: { muscleGroup: true },
            },
          },
        },
        user: {
          include: {
            profileInfo: true,
          },
        },
      },
    });

  return getWorkoutMuscleGroups(createdWorkout);
};

export const updateWorkout = async (
  id: string,
  workout: WorkoutInput,
  ctx: Context
) => {
  await ctx.prisma.workoutExercise.deleteMany({
    where: { workoutId: id },
  });

  const updatedWorkout =
    await ctx.prisma.workout.update<Prisma.WorkoutUpdateArgs>({
      where: { id },
      data: {
        name: workout.name,
        description: workout.description,
        exercises: {
          create: workout.exercises?.map((data: WorkoutExerciseInput) => ({
            sets: data.sets,
            rest: data.rest,
            repetitions: data.repetitions,
            notes: data.notes,
            exercise: {
              connect: { id: data?.exerciseId },
            },
          })),
        },
        user: {
          connect: { id: workout.userId },
        },
      },
      include: {
        exercises: {
          include: {
            exercise: {
              include: { muscleGroup: true },
            },
          },
        },
        user: {
          include: {
            profileInfo: true,
          },
        },
      },
    });

  return getWorkoutMuscleGroups(updatedWorkout);
};

export const copyWorkoutById = async (
  workoutId: string,
  userId: string,
  ctx: Context
) => {
  const workout = await getWorkoutById(workoutId, ctx);
  const copiedWorkout =
    await ctx.prisma.workout.create<Prisma.WorkoutCreateArgs>({
      data: {
        name: workout?.name || '',
        description: workout?.description || '',
        exercises: {
          create: workout?.exercises.map((data: WorkoutExercise) => ({
            sets: data.sets,
            rest: data.rest,
            repetitions: data.repetitions,
            notes: data?.notes || '',
            exercise: {
              connect: { id: data.exerciseId },
            },
          })),
        },
        user: {
          connect: { id: userId },
        },
        basedOn: {
          connect: { id: workout?.id },
        },
      },
      include: {
        exercises: {
          include: {
            exercise: {
              include: { muscleGroup: true },
            },
          },
        },
        user: {
          include: {
            profileInfo: true,
          },
        },
      },
    });

  return getWorkoutMuscleGroups(copiedWorkout);
};

export const deleteWorkout = async (id: string, ctx: Context) => {
  await ctx.prisma.workoutExercise.deleteMany({
    where: { workoutId: id },
  });

  return await ctx.prisma.workout.delete({
    where: { id },
    include: { user: true },
  });
};
