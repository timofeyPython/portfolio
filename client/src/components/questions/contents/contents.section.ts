import { utils } from "../../../core/utils/utils"
import { data } from "../../../data/data" 

let array: { id: number; question: string; code?: string; solution: string; s_code?: [] }[] = []

const { rewind } = utils()

export function createSection(state: any, options?: {rewind: true}){
    
 const answer = state.tested.answer

 array = options?.rewind ? rewind(data) : data

 const rows: Array<string>  = array.map(((el, i)=> {

        const answerFind = answer.find((answ: { id: number })=> answ.id == el.id)
        const question = `<p><strong>${i+1}. ${el.question}</strong></p>`
        const code = el.code ? `
                    <div class="code">
                    <code>
                    ${el.code ? el.code : ''}
                    </code>
        
                </div>
        ` : ''

        const aswer = `
            <div>
                <textarea ${answerFind ? 'disabled' : ''}>${answerFind ? answerFind.solution : ''}</textarea>
            </div>
        `

        const button = `
        <div>
            <button  type="button" class="btn btn-outline-primary" data-button="${i}">Ответить</button>
        </div>
        `

        return `
            <section data-cnts="${el.id}" class="content ${answerFind ? 'active' : ''}">
                <div>
                    ${question}
                    <label>Ваш ответ:</label>
                    ${code}
                </div>
                <div>
                    ${aswer}
                    ${!answerFind ? button : `
                        ${createAnswer({$section : +el.id})}
                    
                    `}
                </div>
         
            </section>
        
        `
    }))

    return rows.join('')
}

export function createAnswer(element: {$section: any | number}) {
    const  answer = array.find((el)=>{
        if (typeof element.$section !== 'number') {
            element.$section.classList.add('active')
            return el.id === Number(element.$section.dataset.cnts)
        } else {
            return el.id === Number(element.$section)
        }
    
    })
 
    let code = !answer.s_code ? null : answer?.s_code.map((answer: any)=> `
            <div class="description">${answer?.description}</div>

            ${!answer.code ? '': `
                <div class="code">
                <pre> 
                    <code>
                        ${answer.code}
                    </code>
                </pre>
            </div>`}
    `).join('')

    code = !code ?  '' : `
        <label>Пояснение:</label>
        <div class="code_solution">
            ${code}
        </div>
    `  
    
    return `
        <div class="solution">
            <label>Ответ:</label>
            <div>${answer?.solution}</div>
            <br>
            ${code}
        </div>
    `
}