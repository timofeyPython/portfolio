import { IProject } from "@/types/myprojects/interfaces";

export default function ({ title, description, imgs, linkGit }: IProject) {
  return `
    <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">${title}</h4>
          </div>
          <div class="card-body">
            <p class="card-text">${description
              .split(" ")
              .filter((text) => text)
              .slice(0, 18)
              .join(" ")}...</p>
            <hr/>
            <p class="card-text"><small class="text-muted">Использованные технологии</small></p>
            ${
              Array.isArray(imgs)
                ? `
              <div style="text-align: center">      
                  ${imgs.map((img) => `<img src="${img}">`).join("")}
              </div>
              `
                : ""
            }
        </div>
        ${
          linkGit
            ? `
            <div class="card-footer">
                <small class="text-muted">
                  <a href="${linkGit}">Проект доступен GitHub</a>
                </small>
            </div>
            `
            : ""
        }
      </div>
    </div>
  `;
}
