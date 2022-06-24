import { PrismaClient } from '@prisma/client';
import { prismaClient } from '..';

export default async function handle(req, res) {
  const firms = await prismaClient.USR_FIRMS.findMany();
  res.json(firms);
}
