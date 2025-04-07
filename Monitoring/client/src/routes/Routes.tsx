import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "@components/Route/PrivateRoute";
import { AuthProvider } from "@components/Route/AuthProvider";
import { ERoutePath } from "@/types/routePath.enum";
import { AuthPage } from "@page/AuthPage";
import { AppPage } from "@page/AppPage";
import { NotFoundPage } from "@page/NoFoundPage";
import { routes } from "./index";

export function useRoutes() {
  return (
    <BrowserRouter basename="monitoring">
      <AuthProvider>
        <Routes>
          <Route path={`/${ERoutePath.LOGIN}`} element={<AuthPage />} />
          <Route element={<PrivateRoute />}>
            <Route element={<AppPage />}>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
