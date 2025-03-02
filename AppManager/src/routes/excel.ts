import { About } from "@/components/excel/about/About";
import { Dashboard } from "@/components/excel/dashboard/Dashboard";
import { Formula } from "@/components/excel/core/formula/Formula";
import { Header } from "@/components/excel/core/header/Header";
import { EPath } from "@/types/enum";
import { Toolbar } from "@/components/excel/core/toolbar/Toolbar";
import { Table } from "@/components/excel/core/table/Table";

export function useRoutes(location: string, hash: string) {
  let components: (
    | typeof Dashboard
    | typeof About
    | typeof Formula
    | typeof Header
    | typeof Toolbar
    | typeof Table
  )[] = [Dashboard];

  if (location === EPath.about) components = [About];
  else if (hash) components = [Header, Toolbar, Formula, Table];

  return components;
}
