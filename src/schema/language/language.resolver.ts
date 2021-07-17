import { Context } from '../../context';
import * as languageService from './language.service';

const resolvers = {
  Query: {
    getLanguages: async (_parent, args, ctx: Context) =>
      await languageService.getLanguages(args.name, args.languageCode, ctx),
    getLanguageById: async (_parameters, args, ctx: Context) =>
      await languageService.getLanguageById(args.id, ctx),
  },
};

export default resolvers;
