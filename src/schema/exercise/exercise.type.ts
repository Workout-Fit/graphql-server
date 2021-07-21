import { gql } from 'apollo-server';

export default gql`
  type Query {
    getExercises(
      name: String
      muscleGroupId: Int
      exerciseTypeId: Int
      equipmentId: Int
      difficultyId: Int
    ): [Exercise]
    getExerciseById(id: String!): Exercise
  }

  type Exercise {
    id: String!
    name: String
    muscleGroupId: Int
    exerciseTypeId: Int
    equipmentId: Int
    difficultyId: Int
    muscleGroup: MuscleGroup
    exerciseType: ExerciseType
    equipment: Equipment
    difficulty: Difficulty
    language: Language
  }
`;
