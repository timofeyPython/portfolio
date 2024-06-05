import { data } from "../../../data/data" 


export function createSection(state: any){
    
    
 
 const answer = state.tested.answer

 const rows: Array<string>  = data.map(((el, i)=> {

        const answerFind = answer.find((answ: { id: string })=> answ.id == `${el.id}`)
 
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
            <button  type="button" class="btn btn-outline-primary" data-answer="btn_ans_${i}">Ответить</button>
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
 
    const  answer = data.find((el, i)=>{
        if (typeof element.$section !== 'number') {
            element.$section.classList.add('active')
            return i === Number(element.$section.dataset.cnts)
        } else {
            return i === Number(element.$section)
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