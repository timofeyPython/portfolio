import { createSection } from './contents.section'
 
export class Contents {

    static className = 'main_contents'
 

    constructor() {
    }

    getRoot() {
         
        return `
            <div class="contents">
                <h2 style="margin-top: 25px; text-align: center;">
                    Вам представлен список моих работ в разных направлениях
                </h2>
                <div class="lists">
                    ${createSection()}
                </div>
            </div>
        
        `
    }

    init() {

    }

    
}