import { $ } from "../dom"
import type { IRoutes, HLET, IClasses } from "../../types/interfaces"

 

export class Router {

    $placeholder: { $el: HLET, _append: any}
    routes: Array<IRoutes>
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
 

        const activeRoute = this.routes.find((route)=>  route.path === 'questions')
 
        let Page = activeRoute.template
        // Instance класса 
        this.page = new Page('tested')
 
        // Добавляем контект 
        this.$placeholder._append(this.page.getRoot())
 
        this.page.afterRender()
    }

 
    




}