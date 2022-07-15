import { PrismaClient } from '@prisma/client';
import { prismaClient } from '..';

async function handle(req, res) {
  const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  if (req.method == 'GET') {
    const { page, offset, ...filter } = req.query;

    const skip = parseInt(page - 1) * parseInt(offset);
    const searchWhere = Object.keys(filter)
      .map((key) => {
        let obj;
        if (!filter[key]) {
        } else if (regexExp.test(filter[key])) {
          obj = { [key]: filter[key] };
        } else {
          obj = { [key]: { contains: filter[key] } };
        }
        return obj;
      })
      .filter((search) => search);
    console.log(searchWhere);
    const groups = await prismaClient.$transaction([
      prismaClient.USR_CATEGORY_GROUPS.findMany({
        skip,
        take: parseInt(offset),
        where: {
          AND: searchWhere,
          C_ACTIVE: true,
        },
      }),
      prismaClient.USR_CATEGORY_GROUPS.count({
        where: {
          AND: searchWhere,
          C_ACTIVE: true,
        },
      }),
    ]);
    const groupsData = {
      page,
      pages: Math.ceil(parseInt(groups[1]) / parseInt(offset)),
      groups: groups[0],
    };
    res.json(groupsData);
  } else if (req.method == 'POST') {
    const { deleteIds } = req.body;

    const deleteGroups = await prismaClient.USR_CATEGORY_GROUPS.updateMany({
      where: {
        U_CATEGORY_GROUP_ID: {
          in: deleteIds,
        },
      },
      data: {
        C_ACTIVE: false,
      },
    });
    res.json(deleteGroups);
  }
}
export default handle;
