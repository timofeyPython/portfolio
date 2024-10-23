import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/selectors';
import { ERoles } from '../../types/enum';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 
export default function() {
  const [date, setDate] = useState(`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}`)
  const user = useAppSelector(selectUser)
  const location = useLocation().pathname
  const pages = [
      {
        title: 'Главная',
        active: true,
        path: '/main'
      },
      {
        title: 'Мои задачи',
        active: user.roles.includes(ERoles.EMPLOYEE),
        path: '/tasks'
      },
      {
        title: 'Мой отдел',
        active: user.roles.includes(ERoles.HEAD_OF_GROUPS),
        path: '/groups'
      },
      {
        title: 'Подразделения IT',
        active: user.roles.includes(ERoles.HEAD_OF_DEPARTAMENT),
        path: '/departaments'
      }
  ]
 
  setInterval(()=> setDate(`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}`), 1000)
 
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand href="main">Monitoring IT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              { 
                pages.map((page)=> page.active && (
                  <Nav className="me-auto" key={page.title}>
                  <Nav.Link 
                    href={page.path} 
                    className={page.path === location? 'active' : ''}
                  >{ page.title }</Nav.Link>
                </Nav>
                )) 
              }
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Время: {date}
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}