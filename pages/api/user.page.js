import { PrismaClient } from '@prisma/client';

import { v4 as uuidv4 } from 'uuid';
import { prismaClient } from '..';

const userData = {
  U_DOMAIN_ID: '1',
  U_DEFAULT_LOCALE_ID: '1',
  S_AVATAR: ' ',
  S_FIRM_MAIN: 'fdf',
  S_LASTNAME: ' ',
  C_ACTIVE: true,
};

async function handle(req, res) {
  if (req.method === 'POST') {
    if (req.body?.deleteId) {
      const resault = await deleteUser(req.body?.deleteId);
      res.json(resault);
    } else {
      const resault = await createUser(req.body);
      res.json(resault);
    }
  } else if (req.method === 'PATCH') {
    const resault = await updateUser(req.body);
    res.json(resault);
  }
}

const createUser = async ({ login, password, fio, email, role }) => {
  const data = {
    U_USER_ID: uuidv4(),
    S_LOGIN: login,
    S_FIRSTNAME: fio,
    S_PASSWORD_HASH: password,
    S_EMAIL: email,
    U_ROLE_ID: role,
    ...userData,
  };
  const createUser = await prismaClient.USR_USERS.create({ data: data });
  return createUser;
};

const updateUser = async ({ id, login, password, fio, email, role }) => {
  const data = {
    S_LOGIN: login,
    S_FIRSTNAME: fio,
    S_PASSWORD_HASH: password,
    S_EMAIL: email,
    U_ROLE_ID: role,
  };
  const updateUser = await prismaClient.USR_USERS.update({
    where: {
      U_USER_ID: id,
    },
    data: data,
  });
  return updateUser;
};
const deleteUser = async (id) => {
  console.log(id);
  const deleteUser = await prismaClient.USR_USERS.delete({
    where: {
      U_USER_ID: id,
    },
  });
  return deleteUser;
};
export default handle;
