import { PrismaClient } from '@prisma/client';
import { prismaClient } from '..';

async function handle(req, res) {
  if (req.method == 'GET') {
    const { page, offset, ...filter } = req.query;
    const skip = parseInt(page - 1) * parseInt(offset);
    const searchWhere = Object.keys(filter).map((key) => {
      return { [key]: { contains: filter[key] } };
    });
    const users = await prismaClient.$transaction([
      prismaClient.REG_ROLES.findMany({
        skip,
        take: parseInt(offset),
        where: {
          AND: searchWhere,
        },
      }),
      prismaClient.REG_ROLES.count({
        where: {
          AND: searchWhere,
        },
      }),
    ]);
    const usersData = {
      page,
      pages: Math.ceil(parseInt(users[1]) / parseInt(offset)),
      roles: users[0],
    };
    res.json(usersData);
  } else if (req.method == 'POST') {
    const { deleteIds } = req.body;

    const deleteUsers = await prismaClient.REG_ROLES.deleteMany({
      where: {
        U_ROLE__ID: {
          in: deleteIds,
        },
      },
    });
    res.json(deleteUsers);
  }
}
export default handle;
