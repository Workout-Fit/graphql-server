import gql from 'graphql-tag';

export default gql`
  extend type Query {
    getExercises(
      muscleGroupId: Int, 
      exerciseTypeId: Int,
      equipmentId: Int,
      difficultyId: Int
      ): [Exercise]
    getExerciseById(id: ID!): Exercise
    getExercisesByName(name: String!): [Exercise]
  }

  type Exercise {
    id: ID!
    name: String
    muscleGroupId: Int
    exerciseTypeId: Int
    equipmentId: Int
    difficultyId: Int
    muscleGroup: MuscleGroup
    exerciseType: ExerciseType
    equipment: Equipment
    difficulty: Difficulty
  }
`