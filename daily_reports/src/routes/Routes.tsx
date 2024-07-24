import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../components/Route/PrivateRoute';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../services/context/AuthProvider';

import { AuthPage } from '../page/AuthPage'
import { NotFoundPage } from '../page/NoFoundPage';
import { AppPage } from '../page/AppPage';
import { TaskPage } from '../page/TasksPage';
 
export function useRoutes() { 

    return(
            <BrowserRouter>
                <AuthProvider>
                        <Routes>
                            <Route path='/login' element={<AuthPage/>}/>
                            <Route element={<PrivateRoute />}>
                                <Route element={<AppPage/>}>
                                    {/* <Route path='/' element={<MainComponent/>}/> */}
                                    <Route path='/' element={<TaskPage/>} />
                                    <Route path="*" element={<NotFoundPage/>} />
                                </Route>
                            </Route>
                        </Routes>        
                </AuthProvider>
            </BrowserRouter>
    )
}

 
 