import { PrismaClient } from '@prisma/client';
import requestIp from 'request-ip'; // Get Local IP

import { v4 as uuidv4 } from 'uuid';
import { prismaClient } from '..';
import bcrypt from 'bcrypt';
async function handle(req, res) {
  if (req.method === 'POST') {
    //= get ip and host
    const detectedIp = requestIp.getClientIp(req);
    const host = req.headers.host.split('.')[0];
    const domains = await prismaClient.SYS_DOMAINS.findFirst({
      where: { AND: [{ S_DOMAIN_CODE: host }, { C_ACTIVE: true }] },
    });
    console.log(host);
    const domainId = domains.U_DOMAIN_ID;
    const pgName = domains.S_DB_USERNAME;
    const pgPassword = domains.S_DB_PASSWORD;
    console.log('pgName ', pgName);

    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: 'postgresql://' + pgName + ':' + pgPassword + '@172.17.0.1:5432/main?schema=public',
        },
      },
    });

    try {
      const { email, password } = req.body;
      bcrypt.hash(password, 10, function (err, hash) {
        console.log('gen hash', hash);
      });

      const findEmail = await prismaClient.USR_USERS.findMany({
        where: { AND: [{ S_EMAIL: email }, { C_ACTIVE: true }, { U_DOMAIN_ID: domainId }] },
      });
      if (findEmail?.length === 0) {
        throw new Error('NOt found');
      }

      const match = await bcrypt.compare(password, findEmail[0].S_PASSWORD_HASH);
      if (!match) {
        throw new Error('mATCH');
      }
      const role = await prismaClient.REG_ROLES.findMany({
        where: { AND: [{ U_ROLE__ID: findEmail[0]?.U_ROLE_ID }, { C_ACTIVE: true }] },
      });
      console.log(role);
      let firmsList = [];
      const firms = await prismaClient.USR_USER_FIRMS.findMany({
        where: { AND: [{ U_USER_ID: findEmail[0]?.U_USER_ID }, { U_DOMAIN_ID: domainId }] },
      });

      for (let firm of firms) {
        firmsList.push(
          await prismaClient.USR_FIRMS.findMany({
            where: { AND: [{ U_FIRM_ID: firm?.U_USER_FIRM_ID }, { C_ACTIVE: true }] },
          }),
        );
      }
      const now = new Date();
      const newSession = await prismaClient.USR_USER_SESSIONS.create({
        data: {
          U_DOMAIN_ID: domainId,
          U_USER_ID: findEmail[0].U_USER_ID,
          D_BEGIN: now,
          S_IP: detectedIp,
        },
      });
      console.log(newSession);
      console.log(findEmail);
      console.log(firmsList);

      // throw new Error();

      res.json({
        id: findEmail[0].U_USER_ID,
        locale: findEmail[0].U_DEFAULT_LOCALE_ID,
        role: role[0]?.S_ROLE_NAME,
        login: findEmail[0].S_LOGIN,
        name: findEmail[0].S_FIRSTNAME,
        lastName: findEmail[0].S_LASTNAME,
        email: findEmail[0].S_EMAIL,
        firms: firmsList,
        domain: domainId,
        sessionId: newSession?.U_SESSION_ID,
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
