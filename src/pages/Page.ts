export class Page {
    params: any
    constructor(params: any) {
        this.params = params
    }

    getRoot() {
        throw new Error('Method gerRoot should be implemented')
    }

    afterRender() {}

    destoy() {}
}