import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const { BUCKET_HOST } = process.env;

export interface Context {
  prisma: PrismaClient;
  bucketHost: string;
}

const context: Context = {
  prisma,
  bucketHost: BUCKET_HOST ?? '',
};

export default context;
