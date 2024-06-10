import iconTS from '../../../assets/icon/ts.png'
import iconSCSS from '../../../assets/icon/scss.png'
import iconWP from '../../../assets/icon/webpack.png'
import iconReact from '../../../assets/icon/react.png'
import iconVue from '../../../assets/icon/vue.png'
import iconGithub from '../../../assets/icon/github.png'

export function section() {
          
    const listsJob = [
        {
            href: 'questions',
            title: 'Тестирование по JS',
            description: 'В данном тесте представлены вопросы по ЯП JavaScript, в создании теста использовались такие технологии, как Webpack, Typescript, SCSS. Данный модуль был написан без использования фреймворков и сторонних библиотек, главная задача была создать свой фреймворк, чтобы понять принципы работы современных технологий.',
            link_description: 'Ниже представлен код приложения из Github',
            link_git: '/github',
            img: [iconTS, iconSCSS, iconWP]
        },
        {
            href: '/',
            title: 'Ежедневные рапорты сотрудников',
            description: 'Данный функционал позволяет избавить сотрудников отделов от отправки ежедневного информирования о выполненных работах',
            link_description: 'Ниже представлен код приложения из Github',
            link_git: '',
            img: iconReact
        },
        {
            href: '/',
            title: 'Напоминание  о событиях',
            link_description: 'Ниже представлен код приложения из Github',
            description: 'Данный функционал позволяет создавать события, выбирая нужную дату и указав свою почту, куда придёт сообщение о напоминани ',
            link_git: '',
            img: [iconReact]
        }
    ]

    const lists_content = () => {

        const generateHTML = (html: {title: string, description: string, img: string | [], href: string}, index: number) => {
            let img = ``
                if (Array.isArray(html.img)) 
                    img = `
                    <div style="text-align: center; margin-top: 25px;"><label>Используемые технологии</label></div>
                    <div class="imgs">      
                    ${html.img.map((img)=> `
                            <div class="img">

                            <img src="${img}">
                        </div>
                    `).join('')}
                    </div>
                `
                else 
                    img = `
                    <div style="text-align: center; margin-top: 25px;"><label>Используемые технологии</label></div>
                    <div class="img">
                        <img alt="${html.title}" src="${html.img}">
                    </div>
                `

                return `
                    <div class="block" data-block="${index}">
                        <h3>${html.title}</h3>
                        <hr>
                        <div>
                            <div>
                                <label>Описание: ${html.description.split(' ').slice(0, 10).join(' ')}...</label>
                            </div>
                            ${img}
                        </div>
                      
                        <hr>
            
                        <div>
                            <label>Код от приложения доступен: </label>
                            <img class="github" src="${iconGithub}">
                        </div>
                    </div>
                `   
            }
 
            const array = listsJob.map((list, i)=>generateHTML(list, i))

            let contents: Array<Array<string>> = []
            let elements: Array<string> = []

            array.forEach((list, i)=> {

                if (elements.length === 3) {
                    contents.push(elements)
                    elements = []
                }  
                
                elements.push(list)
            
                if (i+1 === array.length ) {
                    contents.push(elements)  
                    elements = []
                }  

            })
            const result = contents.map((content) => `
                    <div class="blocks">
                        ${content.join('')}
                    </div>
            `)

            return result.join('')
    }

    const showBlock = (html: {title: string, description: string, img: any}) => {


        let img = ``
        if (Array.isArray(html.img)) 
            img = `
            <div style="text-align: center; margin-top: 25px;"><label>Используемые технологии</label></div>
            <div class="imgs">      
            ${html.img.map((img)=> `
                <div class="img">
                    <img src="${img}">
                </div>
            `).join('')}
            </div>
        `
        else 
            img = `
            <div style="text-align: center; margin-top: 25px;"><label>Используемые технологии</label></div>
            <div class="img">
                <img alt="${html.title}" src="${html.img}">
            </div>
        `

        return `
         <div class="main_modalContent">
            <div> 
                <label><strong>Проект</strong>: ${html.title}</label>
                  <div style="max-width: 800px;"> <strong>Описание: </strong> ${html.description}</div>
            </div>
            <hr>
            <div>
                <div>${img}</div>
                <div style="text-align: center; margin-top: 25px;"><label>Код от приложения доступен:</label></div>
            </div>
            <div class="img">
                <img class="github" src="${iconGithub}">
            </div>
            <div style="display: flex; justify-content: space-around;">
                <button type="button" class="btn btn-success" id="transition">Перейти к проекту</button>
                <button type="button" class="btn btn-secondary" id="close">Закрыть</button>
            </div>
                
          </div>
        
        `
    }

    return {lists_content, showBlock, listsJob}
}