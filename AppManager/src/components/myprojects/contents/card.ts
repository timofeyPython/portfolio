import iconGithub from "@assets/icon/github.png";

export default function ({
  href,
  title,
  description,
  imgs,
  linkGit,
  linkDescription,
}: {
  title: string;
  description: string;
  linkDescription: string;
  imgs: Array<string>;
  href: string;
  linkGit: string;
}) {
  return `
      <div class="main_modalContent">
        <div> 
          <h5>Проект</h5>
          <p class="lead">${title}</p>
        </div>
        <div>
          <h5>Описание функционала приложения</h5>
          <p class="lead">${description}</p>
        </div>
        <div>
          <h5>Описание технологий</h5>
          <p class="lead">${linkDescription}</p> 
        </div>
        <div>
          <div>
            ${
              Array.isArray(imgs) &&
              ` 
              <hr class="d-none d-md-block my-2">  
              <div style="text-align: center; margin-top: 25px;"><h5>Используемые технологии</h5></div>
              <div style="text-align: center"> ${imgs.map((img) => `<img src="${img}">`).join("")}</div>`
            }
                
            <div style="text-align: center; margin-top: 25px;"><h5>Код от приложения доступен</h5></div>
          </div>
          <div class="github">
            <a href="${linkGit}" target="blank">
              <img src="${iconGithub}">
            </a>
          </div>
          <div style="display: flex; justify-content: space-around;">
            <a href="${href}"><button type="button" class="btn btn-outline-dark" id="transition">Перейти к проекту</button></a> 
             <button type="button" class="btn btn-outline-dark" id="close">Закрыть</button>
        </div>       
      </div>
    `;
}
