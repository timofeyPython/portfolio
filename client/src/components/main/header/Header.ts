import { IDom, IQSHeaderOptions } from "../../../types/interfaces";


export class Header {

    static className = 'main_header'
    $root;

    constructor($root: IDom, options: IQSHeaderOptions) {
        this.$root = $root
    }

    getRoot() {
        return `
            <div class="header">
                <p>
                    Меня зовут Тимофей и я FullStack разработчик, я владею следующим стеком технологий 
                </p>
                <p>
                    Тут приземляется список технологий.
                </p>
            </div>
        `
    }

    init() {
        console.log('init header')
    }
}