import { PrismaClient } from '@prisma/client';

import { v4 as uuidv4 } from 'uuid';
import { prismaClient } from '..';

async function handle(req, res) {
  if (req.method === 'POST') {
    if (req.body?.deleteId) {
      const resault = await deleteRole(req.body?.deleteId);
      res.json(resault);
    } else {
      const resault = await createRole(req.body);
      res.json(resault);
    }
  } else if (req.method === 'PATCH') {
    const resault = await updateRole(req.body);
    res.json(resault);
  }
}

const createRole = async ({ name }) => {
  const data = {
    U_ROLE__ID: uuidv4(),
    S_ROLE_NAME: name,
    U_ROLE_CODE: uuidv4(),
    C_ACTIVE: true,
  };
  const createRole = await prismaClient.REG_ROLES.create({ data: data });
  return createRole;
};

const updateRole = async ({ name, id }) => {
  const data = {
    S_ROLE_NAME: name,
  };
  const updateRole = await prismaClient.REG_ROLES.update({
    where: {
      U_ROLE__ID: id,
    },
    data: data,
  });
  return updateRole;
};
const deleteRole = async (id) => {
  const deleteRole = await prismaClient.REG_ROLES.delete({
    where: {
      U_ROLE__ID: id,
    },
  });
  return deleteRole;
};
export default handle;
