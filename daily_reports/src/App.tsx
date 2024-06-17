import { useRoutes } from './routes/Routes.tsx'
import './style.scss'


function App() {
  const routes = useRoutes()

  return (
    <>
      { routes }
    </>
 
  )
}

export default App
