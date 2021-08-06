import { Context } from 'context';
import Equipment from './equipment.type';
import * as equipmentService from './equipment.service';
import { Resolver, Arg, Ctx } from 'type-graphql';

@Resolver((of) => Equipment)
export default class EquipmentResolver {
  async getEquipments(
    @Arg('name', { nullable: true }) name: string,
    @Ctx() ctx: Context
  ) {
    return await equipmentService.getEquipments(name, ctx);
  }
  async getEquipmentById(@Arg('id') id: number, @Ctx() ctx: Context) {
    return await equipmentService.getEquipmentById(id, ctx);
  }
}
