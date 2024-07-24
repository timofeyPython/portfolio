import { Outlet } from "react-router-dom"
import { Header } from "../components/forms/Header/Header"
 


export function AppPage() {
    return(
        <div className="contents">
            <Header/>
            <div className="view">
                <Outlet />
            </div>
           
        </div>
    )
}