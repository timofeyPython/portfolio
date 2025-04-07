import { Logger } from "@nestjs/common";
import { LDAP } from "./config";
import { Client } from "ldapts";
import { TLdapInfo } from "@lib/types/interfaces";
import { translateError } from "@lib/utils/halperFn";

export const ldap = async function (login: string, password: string) {
  let isAuthenticated = false;
  let userData: Array<TLdapInfo> = [];
  let message: string = "";

  for (let i = 0; i < LDAP.SERVERS.length; i++) {
    const url = LDAP.OVER_SSL
      ? `ldaps://${LDAP.SERVERS[i]}`
      : `ldap://${LDAP.SERVERS[i]}`;
    const client = new Client({
      url,
      tlsOptions: {
        minVersion: "TLSv1.2",
        rejectUnauthorized: false,
      },
      strictDN: false,
    });

    try {
      await client.bind(LDAP.USER_DOMAIN + "\\" + login, password);
      isAuthenticated = true;
      const searchResults = await client.search(LDAP.DN, {
        filter: "(&(objectCategory=user)(samaccountname=" + `${login}` + "))",
        scope: "sub",
      });

      await client.unbind();
      const {
        cn,
        sAMAccountName,
        company,
        mail,
        department,
        title,
        telephoneNumber,
      } = searchResults.searchEntries[0];
      userData.push({
        samaccountname: `${sAMAccountName}`,
        displayname: `${cn}`,
        company: `${company}`,
        mail: `${mail}`,
        department: `${department}`,
        title: `${title}`,
        telephoneNumber: `${telephoneNumber}`,
      });

      Logger.log(`OK: <AUTH>-${login} проверка ${url}`);
      (message = `OK: <AUTH>-${login} проверка LDAP-`), LDAP.SERVERS[i];
      break;
    } catch (e) {
      message = `Ошибка авторизации:, ${translateError(e.code)}`;
      isAuthenticated = false;
      break;
    }
  }

  return {
    status: isAuthenticated,
    userData,
    message,
  };
};
