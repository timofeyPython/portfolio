import { EPath } from "@/types/enum";
import { Header } from "@/components/myprojects/header/Header";
import { Contents } from "@/components/myprojects/contents/Contents";
import { Navbar } from "@/components/main/navbar/Navbar";
import { Home } from "@/components/main/home/Home";
import { NotFound } from "@/components/main/notFound/NotFound";
import { Contacts } from "@/components/main/contacts/Contancts";
import { About } from "@/components/main/about/About";

export function useRoutes() {
  const location = window.location.pathname.split("/")[1];
  let components: (
    | typeof Header
    | typeof Contents
    | typeof Navbar
    | typeof Home
    | typeof NotFound
    | typeof Contacts
  )[] = [];

  switch (location) {
    case EPath.myprojects:
      components = [Header, Contents];
      break;
    case EPath.about:
      components = [About];
      break;
    case EPath.contacts:
      components = [Contacts];
      break;
    case EPath.home:
      components = [Home];
      break;
    default:
      components = [NotFound];
      break;
  }

  components.unshift(Navbar);

  return components;
}
