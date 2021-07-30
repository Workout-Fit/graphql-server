/* tslint:disable */
/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface GQLDifficulty {
  id: string;
  name: string;
}

export interface GQLEquipment {
  id: string;
  name: string;
}

export interface GQLQuery {
  getExercises?: Array<GQLExercise | null>;
  getExerciseById?: GQLExercise;
  getDifficultyLevels?: Array<GQLDifficulty | null>;
  getDifficultyLevelsByName?: GQLDifficulty;
  getDifficultyById?: GQLDifficulty;
  getEquipments?: Array<GQLEquipment | null>;
  getEquipmentsByName?: GQLEquipment;
  getEquipmentById?: GQLEquipment;
  getExerciseTypes?: Array<GQLExerciseType | null>;
  getExerciseTypesByName?: Array<GQLExerciseType | null>;
  getExerciseTypeById?: GQLExerciseType;
  getMuscleGroups?: Array<GQLMuscleGroup | null>;
  getMuscleGroupsByName?: GQLMuscleGroup;
  getMuscleGroupById?: GQLMuscleGroup;
  getWorkoutsByUserId?: Array<GQLWorkout | null>;
  getWorkoutById?: GQLWorkout;
  getUserById?: GQLUser;
  getLanguages?: Array<GQLLanguage | null>;
  getLanguageById?: GQLLanguage;
}

export interface GQLExercise {
  id: string;
  name?: string;
  muscleGroupId?: number;
  exerciseTypeId?: number;
  equipmentId?: number;
  difficultyId?: number;
  muscleGroup?: GQLMuscleGroup;
  exerciseType?: GQLExerciseType;
  equipment?: GQLEquipment;
  difficulty?: GQLDifficulty;
  language?: GQLLanguage;
}

export interface GQLExerciseType {
  id: string;
  name: string;
}

export interface GQLMuscleGroup {
  id: string;
  name: string;
}

export interface GQLMutation {
  createWorkout?: GQLWorkout;
  updateWorkout?: GQLWorkout;
  copyWorkoutById?: GQLWorkout;
  deleteWorkout?: GQLWorkout;
  createUser?: GQLUser;
}

export interface GQLWorkoutInput {
  id?: string;
  userId: string;
  name: string;
  description?: string;
  basedOnId?: string;
  exercises?: Array<GQLExercisesInput | null>;
}

export interface GQLExercisesInput {
  exerciseId: string;
  sets: number;
  rest: number;
  repetitions: number;
  notes?: string;
}

export interface GQLWorkout {
  id: string;
  userId: string;
  name: string;
  description?: string;
  basedOnId?: string;
  basedOn?: GQLWorkout;
  muscleGroups: Array<string | null>;
  user: GQLUser;
  exercises?: Array<GQLWorkoutExercise | null>;
}

export interface GQLWorkoutExercise {
  exerciseId: string;
  workoutId: string;
  sets: number;
  rest: number;
  repetitions: number;
  notes?: string;
  exercise?: GQLExercise;
  workout?: GQLWorkout;
}

export interface GQLUser {
  id: string;
  profileInfo?: GQLProfileInfo;
  workout?: Array<GQLWorkout | null>;
}

export interface GQLProfileInfoInput {
  height?: number;
  weight?: number;
  bio?: string;
  profilePicture?: string;
  username: string;
  name: string;
}

export interface GQLProfileInfo {
  height?: number;
  weight?: number;
  username?: string;
  bio?: string;
  profilePicture?: string;
  name?: string;
}

export interface GQLLanguage {
  id: string;
  name: string;
  languageCode: string;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface GQLResolver {
  Difficulty?: GQLDifficultyTypeResolver;
  Equipment?: GQLEquipmentTypeResolver;
  Query?: GQLQueryTypeResolver;
  Exercise?: GQLExerciseTypeResolver;
  ExerciseType?: GQLExerciseTypeTypeResolver;
  MuscleGroup?: GQLMuscleGroupTypeResolver;
  Mutation?: GQLMutationTypeResolver;
  Workout?: GQLWorkoutTypeResolver;
  WorkoutExercise?: GQLWorkoutExerciseTypeResolver;
  User?: GQLUserTypeResolver;
  ProfileInfo?: GQLProfileInfoTypeResolver;
  Language?: GQLLanguageTypeResolver;
}
export interface GQLDifficultyTypeResolver<TParent = any> {
  id?: DifficultyToIdResolver<TParent>;
  name?: DifficultyToNameResolver<TParent>;
}

export interface DifficultyToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface DifficultyToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLEquipmentTypeResolver<TParent = any> {
  id?: EquipmentToIdResolver<TParent>;
  name?: EquipmentToNameResolver<TParent>;
}

export interface EquipmentToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EquipmentToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLQueryTypeResolver<TParent = any> {
  getExercises?: QueryToGetExercisesResolver<TParent>;
  getExerciseById?: QueryToGetExerciseByIdResolver<TParent>;
  getDifficultyLevels?: QueryToGetDifficultyLevelsResolver<TParent>;
  getDifficultyLevelsByName?: QueryToGetDifficultyLevelsByNameResolver<TParent>;
  getDifficultyById?: QueryToGetDifficultyByIdResolver<TParent>;
  getEquipments?: QueryToGetEquipmentsResolver<TParent>;
  getEquipmentsByName?: QueryToGetEquipmentsByNameResolver<TParent>;
  getEquipmentById?: QueryToGetEquipmentByIdResolver<TParent>;
  getExerciseTypes?: QueryToGetExerciseTypesResolver<TParent>;
  getExerciseTypesByName?: QueryToGetExerciseTypesByNameResolver<TParent>;
  getExerciseTypeById?: QueryToGetExerciseTypeByIdResolver<TParent>;
  getMuscleGroups?: QueryToGetMuscleGroupsResolver<TParent>;
  getMuscleGroupsByName?: QueryToGetMuscleGroupsByNameResolver<TParent>;
  getMuscleGroupById?: QueryToGetMuscleGroupByIdResolver<TParent>;
  getWorkoutsByUserId?: QueryToGetWorkoutsByUserIdResolver<TParent>;
  getWorkoutById?: QueryToGetWorkoutByIdResolver<TParent>;
  getUserById?: QueryToGetUserByIdResolver<TParent>;
  getLanguages?: QueryToGetLanguagesResolver<TParent>;
  getLanguageById?: QueryToGetLanguageByIdResolver<TParent>;
}

export interface QueryToGetExercisesArgs {
  name?: string;
  muscleGroupId?: number;
  exerciseTypeId?: number;
  equipmentId?: number;
  difficultyId?: number;
}
export interface QueryToGetExercisesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetExercisesArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetExerciseByIdArgs {
  id: string;
}
export interface QueryToGetExerciseByIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetExerciseByIdArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetDifficultyLevelsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetDifficultyLevelsByNameArgs {
  name: string;
}
export interface QueryToGetDifficultyLevelsByNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetDifficultyLevelsByNameArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetDifficultyByIdArgs {
  id: string;
}
export interface QueryToGetDifficultyByIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetDifficultyByIdArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetEquipmentsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetEquipmentsByNameArgs {
  name: string;
}
export interface QueryToGetEquipmentsByNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetEquipmentsByNameArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetEquipmentByIdArgs {
  id: string;
}
export interface QueryToGetEquipmentByIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetEquipmentByIdArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetExerciseTypesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetExerciseTypesByNameArgs {
  name: string;
}
export interface QueryToGetExerciseTypesByNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetExerciseTypesByNameArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetExerciseTypeByIdArgs {
  id: string;
}
export interface QueryToGetExerciseTypeByIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetExerciseTypeByIdArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetMuscleGroupsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetMuscleGroupsByNameArgs {
  name: string;
}
export interface QueryToGetMuscleGroupsByNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetMuscleGroupsByNameArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetMuscleGroupByIdArgs {
  id: string;
}
export interface QueryToGetMuscleGroupByIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetMuscleGroupByIdArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetWorkoutsByUserIdArgs {
  userId: string;
}
export interface QueryToGetWorkoutsByUserIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetWorkoutsByUserIdArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetWorkoutByIdArgs {
  id: string;
}
export interface QueryToGetWorkoutByIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetWorkoutByIdArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetUserByIdArgs {
  id: string;
}
export interface QueryToGetUserByIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetUserByIdArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetLanguagesArgs {
  name?: string;
  languageCode?: string;
}
export interface QueryToGetLanguagesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetLanguagesArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGetLanguageByIdArgs {
  id: string;
}
export interface QueryToGetLanguageByIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGetLanguageByIdArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLExerciseTypeResolver<TParent = any> {
  id?: ExerciseToIdResolver<TParent>;
  name?: ExerciseToNameResolver<TParent>;
  muscleGroupId?: ExerciseToMuscleGroupIdResolver<TParent>;
  exerciseTypeId?: ExerciseToExerciseTypeIdResolver<TParent>;
  equipmentId?: ExerciseToEquipmentIdResolver<TParent>;
  difficultyId?: ExerciseToDifficultyIdResolver<TParent>;
  muscleGroup?: ExerciseToMuscleGroupResolver<TParent>;
  exerciseType?: ExerciseToExerciseTypeResolver<TParent>;
  equipment?: ExerciseToEquipmentResolver<TParent>;
  difficulty?: ExerciseToDifficultyResolver<TParent>;
  language?: ExerciseToLanguageResolver<TParent>;
}

export interface ExerciseToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExerciseToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExerciseToMuscleGroupIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExerciseToExerciseTypeIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExerciseToEquipmentIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExerciseToDifficultyIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExerciseToMuscleGroupResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExerciseToExerciseTypeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExerciseToEquipmentResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExerciseToDifficultyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExerciseToLanguageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLExerciseTypeTypeResolver<TParent = any> {
  id?: ExerciseTypeToIdResolver<TParent>;
  name?: ExerciseTypeToNameResolver<TParent>;
}

export interface ExerciseTypeToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExerciseTypeToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLMuscleGroupTypeResolver<TParent = any> {
  id?: MuscleGroupToIdResolver<TParent>;
  name?: MuscleGroupToNameResolver<TParent>;
}

export interface MuscleGroupToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MuscleGroupToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLMutationTypeResolver<TParent = any> {
  createWorkout?: MutationToCreateWorkoutResolver<TParent>;
  updateWorkout?: MutationToUpdateWorkoutResolver<TParent>;
  copyWorkoutById?: MutationToCopyWorkoutByIdResolver<TParent>;
  deleteWorkout?: MutationToDeleteWorkoutResolver<TParent>;
  createUser?: MutationToCreateUserResolver<TParent>;
}

export interface MutationToCreateWorkoutArgs {
  workout: GQLWorkoutInput;
}
export interface MutationToCreateWorkoutResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateWorkoutArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToUpdateWorkoutArgs {
  workout: GQLWorkoutInput;
}
export interface MutationToUpdateWorkoutResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToUpdateWorkoutArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCopyWorkoutByIdArgs {
  id: string;
  userId: string;
}
export interface MutationToCopyWorkoutByIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCopyWorkoutByIdArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToDeleteWorkoutArgs {
  id: string;
}
export interface MutationToDeleteWorkoutResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToDeleteWorkoutArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCreateUserArgs {
  userId: string;
  profileInfo: GQLProfileInfoInput;
}
export interface MutationToCreateUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLWorkoutTypeResolver<TParent = any> {
  id?: WorkoutToIdResolver<TParent>;
  userId?: WorkoutToUserIdResolver<TParent>;
  name?: WorkoutToNameResolver<TParent>;
  description?: WorkoutToDescriptionResolver<TParent>;
  basedOnId?: WorkoutToBasedOnIdResolver<TParent>;
  basedOn?: WorkoutToBasedOnResolver<TParent>;
  muscleGroups?: WorkoutToMuscleGroupsResolver<TParent>;
  user?: WorkoutToUserResolver<TParent>;
  exercises?: WorkoutToExercisesResolver<TParent>;
}

export interface WorkoutToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutToUserIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutToDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutToBasedOnIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutToBasedOnResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutToMuscleGroupsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutToUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutToExercisesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLWorkoutExerciseTypeResolver<TParent = any> {
  exerciseId?: WorkoutExerciseToExerciseIdResolver<TParent>;
  workoutId?: WorkoutExerciseToWorkoutIdResolver<TParent>;
  sets?: WorkoutExerciseToSetsResolver<TParent>;
  rest?: WorkoutExerciseToRestResolver<TParent>;
  repetitions?: WorkoutExerciseToRepetitionsResolver<TParent>;
  notes?: WorkoutExerciseToNotesResolver<TParent>;
  exercise?: WorkoutExerciseToExerciseResolver<TParent>;
  workout?: WorkoutExerciseToWorkoutResolver<TParent>;
}

export interface WorkoutExerciseToExerciseIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutExerciseToWorkoutIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutExerciseToSetsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutExerciseToRestResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutExerciseToRepetitionsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutExerciseToNotesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutExerciseToExerciseResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkoutExerciseToWorkoutResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLUserTypeResolver<TParent = any> {
  id?: UserToIdResolver<TParent>;
  profileInfo?: UserToProfileInfoResolver<TParent>;
  workout?: UserToWorkoutResolver<TParent>;
}

export interface UserToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToProfileInfoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToWorkoutResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLProfileInfoTypeResolver<TParent = any> {
  height?: ProfileInfoToHeightResolver<TParent>;
  weight?: ProfileInfoToWeightResolver<TParent>;
  username?: ProfileInfoToUsernameResolver<TParent>;
  bio?: ProfileInfoToBioResolver<TParent>;
  profilePicture?: ProfileInfoToProfilePictureResolver<TParent>;
  name?: ProfileInfoToNameResolver<TParent>;
}

export interface ProfileInfoToHeightResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileInfoToWeightResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileInfoToUsernameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileInfoToBioResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileInfoToProfilePictureResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileInfoToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLLanguageTypeResolver<TParent = any> {
  id?: LanguageToIdResolver<TParent>;
  name?: LanguageToNameResolver<TParent>;
  languageCode?: LanguageToLanguageCodeResolver<TParent>;
}

export interface LanguageToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LanguageToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LanguageToLanguageCodeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
