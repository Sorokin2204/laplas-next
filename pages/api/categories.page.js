import { PrismaClient } from '@prisma/client';
import { prismaClient } from '..';

async function handle(req, res) {
  if (req.method == 'GET') {
    const categories = await prismaClient.USR_CATEGORIES.findMany({
      where: { C_ACTIVE: true },
    });
    res.json(categories);
  } else if (req.method == 'POST') {
    const { deleteIds } = req.body;

    const deleteUsers = await prismaClient.USR_CATEGORIES.deleteMany({
      where: {
        U_ID: {
          in: deleteIds,
        },
      },
    });
    res.json(deleteUsers);
  }
}
export default handle;
