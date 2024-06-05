import { $ } from "../dom"
import type { IRoutes, IClasses  } from "../../types/interfaces"
import { ActiveRoute } from "./ActiveRoute";
 

export class Router {

    $placeholder;
    routes;
    page: IClasses
 
    constructor (selector: string, routes: Array<IRoutes>) {
        if (!selector) {
            throw new Error('Не передан селектор для Router')
        }

        this.$placeholder = $(selector)
        this.routes = routes
        this.page = null
        this.changePageHandler = this.changePageHandler.bind(this)
        this.init()
    }   

    init() {
        this.changePageHandler()
    }

    changePageHandler() {
 
        if (!this.page == null) 
            this.page.destroy()
        
        this.$placeholder._clear()
 
        const path = ActiveRoute.path

        const activeRoute = this.routes.find((route)=>  route.path === path)
        const defaultPage = this.routes.find((route)=> route.path === 'main')

        let Page = activeRoute ? activeRoute.template : defaultPage.template
 
        // Instance класса 
        this.page = new Page('tested')
 
        // Добавляем контект 
        this.$placeholder._append(this.page.getRoot())
        // Добавляем слушателей
        this.page.afterRender()
    }

 
    




}