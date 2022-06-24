import { PrismaClient } from '@prisma/client';
import { prismaClient } from '..';

export default async function handle(req, res) {
  const roles = await prismaClient.REG_ROLES.findMany();
  res.json(roles);
}
