import { PrismaClient } from '@prisma/client';

import { v4 as uuidv4 } from 'uuid';
import { prismaClient } from '..';
import bcrypt from 'bcrypt';
async function handle(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      const findEmail = await prismaClient.USR_USERS.findMany({
        where: {
          S_EMAIL: email,
        },
      });
      if (findEmail?.length === 0) {
        throw new Error();
      }
      const match = await bcrypt.compare(password, findEmail[0].S_PASSWORD_HASH);
      if (!match) {
        throw new Error();
      }
      const role = await prismaClient.REG_ROLES.findMany({
        where: {
          U_ROLE__ID: findEmail[0]?.U_ROLE_ID,
        },
      });
      let firmsList = [];
      const firms = await prismaClient.USR_USER_FIRMS.findMany({
        where: {
          U_USER_ID: findEmail[0]?.U_USER_ID,
        },
      });

      for (let firm of firms) {
        firmsList.push(
          await prismaClient.USR_FIRMS.findMany({
            where: {
              U_ID: firm?.U_DOMAIN_ID,
            },
          }),
        );
      }

      res.json({
        id: findEmail[0].U_USER_ID,
        locale: findEmail[0].U_DEFAULT_LOCALE_ID,
        role: role[0]?.S_ROLE_NAME,
        login: findEmail[0].S_LOGIN,
        name: findEmail[0].S_FIRSTNAME,
        lastName: findEmail[0].S_LASTNAME,
        email: findEmail[0].S_EMAIL,
        firms: firmsList,
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: true });
    }
  }
}

const authUser = async (email, pass) => {
  return true;
};

export default handle;
