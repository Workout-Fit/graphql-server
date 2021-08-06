import { ObjectType, Field } from 'type-graphql';
import Difficulty from '../difficulty/difficulty.type';
import Equipment from '../equipment/equipment.type';
import ExerciseType from '../exerciseType/exerciseType.type';
import Language from '../language/language.type';
import MuscleGroup from '../muscleGroup/muscleGroup.type';

@ObjectType()
export default class Exercise {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  muscleGroup!: MuscleGroup;

  @Field()
  exerciseType!: ExerciseType;

  @Field()
  equipment!: Equipment;

  @Field()
  difficulty!: Difficulty;

  @Field()
  language!: Language;
}
