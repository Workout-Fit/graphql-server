import Exercise from '../exercise/exercise.type';
import { Field, InputType, ObjectType } from 'type-graphql';
import { User } from '../user/user.type';

@ObjectType()
export class WorkoutExercise {
  @Field()
  exerciseId!: string;

  @Field()
  exercise!: Exercise;

  @Field()
  workoutId!: string;

  @Field()
  sets!: number;

  @Field()
  rest!: number;

  @Field()
  repetitions!: number;

  @Field({ nullable: true })
  notes?: string;
}

@InputType()
export class WorkoutExerciseInput {
  @Field()
  exerciseId!: string;

  @Field()
  workoutId!: string;

  @Field()
  sets!: number;

  @Field()
  rest!: number;

  @Field()
  repetitions!: number;

  @Field({ nullable: true })
  notes?: string;
}

@InputType()
export class WorkoutInput {
  @Field()
  userId!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  basedOnId?: string;

  @Field(() => [WorkoutExerciseInput])
  exercises!: WorkoutExerciseInput[];
}

@ObjectType()
export class Workout {
  @Field()
  id!: string;

  @Field()
  userId!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  basedOn?: Workout;

  @Field(() => [String])
  muscleGroups!: string[];

  @Field()
  user!: User;

  @Field(() => [WorkoutExercise])
  exercises!: WorkoutExercise[];
}
