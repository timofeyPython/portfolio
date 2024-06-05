export class ActiveRoute {
    static get path() {
        console.log(window.location)
        return  window.location.pathname.split('/')[1]
    }

    static get param() {
        return ActiveRoute.path
    }
}