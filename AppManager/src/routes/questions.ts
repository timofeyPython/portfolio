import { Header } from "@/components/questionnaire/header/Header";
import { Questions } from "@/components/questionnaire/questions/Questions";
import { Info } from "@/components/questionnaire/info/Info";
import { Title } from "@/components/questionnaire/title/Title";
import { Modal } from "@/components/questionnaire/modal/Modal";
import { NotFound } from "@/components/main/notFound/NotFound";
import { Main } from "@/components/questionnaire/main/Main";

export function useRoutes(state: boolean) {
  const location = window.location.pathname.split("/")[2];
  let components: (
    | typeof Header
    | typeof Title
    | typeof Info
    | typeof Questions
    | typeof Modal
    | typeof NotFound
    | typeof Main
  )[] = [];

  if (!location) {
    components = [Main];
  } else {
    if (!state) components = [Modal];
    else components = [Header, Title, Info, Questions];
  }

  return components;
}
