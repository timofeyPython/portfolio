import "./style.scss";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { default as NavbarComp } from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "@store/hooks";
import { selectUser } from "@store/selectors";
import cookie from "cookiejs";
import { navRoutes } from "@/routes/index";

export function Navbar() {
  const user = useAppSelector(selectUser);
  const location = useLocation().pathname;
  function exit() {
    cookie.remove("token");
    window.location.reload();
  }

  return (
    <>
      <NavbarComp
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
      >
        <Container>
          <NavbarComp.Brand href="/monitoring/main">
            Monitoring
          </NavbarComp.Brand>
          <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
          <NavbarComp.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navRoutes
                .filter((route) =>
                  user.info.rights.user.role
                    ? route.role.includes(user.info.rights.user.role)
                    : false,
                )
                .map((page) => (
                  <Nav className="me-auto" key={page.path}>
                    <Nav.Link
                      href={`/monitoring${page.path}`}
                      className={page.path === location ? "active" : ""}
                    >
                      {page.title}
                    </Nav.Link>
                  </Nav>
                ))}
            </Nav>
          </NavbarComp.Collapse>
          <NavbarComp.Collapse className="justify-content-end">
            <NavbarComp.Text>login : {user.info.login}</NavbarComp.Text>
            <button className="btn btn-light" type="button" onClick={exit}>
              Выход
            </button>
          </NavbarComp.Collapse>
        </Container>
      </NavbarComp>
    </>
  );
}
