import { useRoutes } from "@routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

function App() {
  const routes = useRoutes();

  return (
    <>
      <ToastContainer />
      {routes}
    </>
  );
}

export default App;
