import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../components/Route/PrivateRoute';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../services/context/AuthProvider';

import { AuthPage } from '../views/AuthPage'
import { NotFoundPage } from '../views/NoFoundPage';
import { MainPage } from '../views/MainPage';
import { MainComponent } from '../components/Main/MainComponent';
 
 
 export function useRoutes() { 
 
    return(
            <BrowserRouter>
                <AuthProvider>
                        <Routes>
                            <Route path='/login' element={<AuthPage/>}/>
                            <Route element={<PrivateRoute />}>
                                <Route element={<MainPage/>}>
                                    <Route path='/' element={<MainComponent/>}/>
                                    <Route path="*" element={<NotFoundPage/>} />
                                </Route>
                            </Route>
                        </Routes>        
                </AuthProvider>
            </BrowserRouter>
    )
}

 
 