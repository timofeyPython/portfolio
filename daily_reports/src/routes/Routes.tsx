import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../views/HomePage'
import { AuthPage } from '../views/AuthPage'


export function One() {
    return(
        <div className="One">
            <h1>Домашняя страница 1</h1>
        </div>
    )
}


export function Two() {
    return(
        <div className="Two">
            <h1>Домашняя страница 2</h1>
        </div>
    )
}


export function Router() { 
    console.log('check session')
    return(
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<AuthPage/>}/>
                <Route path='' element={<Home/>}/>
                <Route path='one' element={<One/>}/>
                <Route path='two' element={<Two/>}/>
            </Routes>
        </BrowserRouter>
    )
}