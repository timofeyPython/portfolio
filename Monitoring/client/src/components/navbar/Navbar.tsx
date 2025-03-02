import "./style.scss";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { default as NavbarComp } from "react-bootstrap/Navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "@store/hooks";
import { selectUser } from "@store/selectors";
import { ERoles } from "@/types/collection.enum";

export function Navbar() {
  const [date, setDate] = useState(
    `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
  );
  const user = useAppSelector(selectUser);
  const location = useLocation().pathname;
  const pages = [
    {
      title: "Главная",
      active: true,
      path: "/main",
    },
    {
      title: "Мои задачи",
      active: user.info.roles.includes(ERoles.EMPLOYEE),
      path: "/mytasks",
    },
    {
      title: "Мой отдел",
      active: user.info.roles.includes(ERoles.HEAD_OF_GROUPS),
      path: "/groups",
    },
    {
      title: "Подразделения IT",
      active: user.info.roles.includes(ERoles.HEAD_OF_DEPARTAMENT),
      path: "/departaments",
    },
  ];

  setInterval(
    () =>
      setDate(
        `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      ),
    1000,
  );

  return (
    <>
      <NavbarComp
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
      >
        <Container>
          <NavbarComp.Brand href="/main">Monitoring IT</NavbarComp.Brand>
          <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
          <NavbarComp.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {pages.map(
                (page) =>
                  page.active && (
                    <Nav className="me-auto" key={page.title}>
                      <Nav.Link
                        href={page.path}
                        className={page.path === location ? "active" : ""}
                      >
                        {page.title}
                      </Nav.Link>
                    </Nav>
                  ),
              )}
            </Nav>
          </NavbarComp.Collapse>
          <NavbarComp.Collapse className="justify-content-end">
            <NavbarComp.Text>
              Время: {date} ‹ › login : {user.info.login}
            </NavbarComp.Text>
          </NavbarComp.Collapse>
        </Container>
      </NavbarComp>
    </>
  );
}
