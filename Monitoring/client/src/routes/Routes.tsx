import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "@components/Route/PrivateRoute";
import { AuthProvider } from "@components/Route/AuthProvider";
import { AuthPage } from "@/page/AuthPage";
import { AppPage } from "@/page/AppPage";
import { MainPage } from "@/page/MainPage";
import { GroupPage } from "@/page/GroupPage";
import { TasksPage } from "@/page/TasksPage";
import { MyTasksPage } from "@/page/MyTasksPage";
import { NotFoundPage } from "@/page/NoFoundPage";

export function useRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route element={<PrivateRoute />}>
            <Route element={<AppPage />}>
              <Route path="/main" element={<MainPage />} />
              <Route path="/mytasks" element={<MyTasksPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/groups" element={<GroupPage />} />
              <Route path="/tasks/:id" element={<TasksPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
