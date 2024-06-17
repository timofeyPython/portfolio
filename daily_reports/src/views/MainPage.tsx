import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
 


export function MainPage() {
    return(
        <div className="contents">
            <Header/>
            <Outlet />
        </div>
    )
}