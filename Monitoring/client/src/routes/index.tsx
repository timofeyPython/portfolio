import { DEFAULT_RIGHTS } from "@services/utils/constants";
import { ERouteParamId, ERoutePath } from "@/types/routePath.enum";
import { EUserRights } from "@/types/general";
import { RoleGuard } from "@components/Route/RoleGuard";
import { MainPage } from "@page/MainPage";
import { ParticipantPage } from "@page/ParticipantPage";
import { GroupsPage } from "@page/GroupsPage";
import { GroupPage } from "@page/GroupPage";
import { MyTasksPage } from "@page/MyTasksPage";
import { ManagerGroups } from "@page/ManagerGroups";
import { ParticipantTasksPage } from "@page/ParticipantTasksPage";
import { MyAllTasksPage } from "@page/MyAllTasksPage";
import { AdminPage } from "@page/AdminPage";

export const routes = [
  {
    path: `/${ERoutePath.MAIN}`,
    element: <MainPage />,
    role: DEFAULT_RIGHTS,
    title: "Главная",
  },
  {
    path: `/${ERoutePath.ON_GROUPS}`,
    element: <GroupsPage />,
    role: DEFAULT_RIGHTS,
    title: "Доступные группы",
  },
  {
    path: `/${ERoutePath.GROUP}/:${ERouteParamId.GROUP_ID}`,
    element: <GroupPage />,
    role: DEFAULT_RIGHTS,
  },
  {
    path: `/${ERoutePath.GROUP}/:${ERouteParamId.GROUP_ID}/${ERoutePath.PARTICIPANT}/:${ERouteParamId.PARTICIPANT_ID}`,
    element: <ParticipantPage />,
    role: DEFAULT_RIGHTS,
  },
  {
    path: `/${ERoutePath.GROUP}/:${ERouteParamId.GROUP_ID}/${ERoutePath.MY_TASKS}/:${ERouteParamId.MY_TASKS_ID}`,
    element: <MyTasksPage />,
    role: DEFAULT_RIGHTS,
  },
  {
    path: `/${ERoutePath.GROUP}/:${ERouteParamId.GROUP_ID}/${ERoutePath.PATICIPANT_TASKS}/:${ERouteParamId.PATICIPANT_TASKS_ID}`,
    element: <ParticipantTasksPage />,
    role: [EUserRights.EDITOR, EUserRights.ADMIN],
  },
  {
    path: `/${ERoutePath.TASKS}`,
    element: <MyAllTasksPage />,
    role: DEFAULT_RIGHTS,
    title: "Мои задания",
  },
  {
    path: `/${ERoutePath.MANG_GROUPS}`,
    element: (
      <RoleGuard role={[EUserRights.EDITOR, EUserRights.ADMIN]}>
        <ManagerGroups />
      </RoleGuard>
    ),
    role: [EUserRights.EDITOR, EUserRights.ADMIN],
    title: "Менеджер групп",
  },
  {
    path: `/${ERoutePath.ADMIN}`,
    element: (
      <RoleGuard role={[EUserRights.ADMIN]}>
        <AdminPage />
      </RoleGuard>
    ),
    role: [EUserRights.ADMIN],
    title: "Админ панель",
  },
];

export const navRoutes = routes
  .filter((route) => route.title)
  .map(({ path, role, title }) => ({
    path,
    role,
    title,
  }));
