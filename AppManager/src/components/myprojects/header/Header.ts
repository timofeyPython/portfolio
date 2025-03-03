import iconTS from "@assets/icon/ts.png";
import iconJS from "@assets/icon/js.png";
import iconSCSS from "@assets/icon/scss.png";
import iconWP from "@assets/icon/webpack.png";
import iconReact from "@assets/icon/react.png";
import iconVue from "@assets/icon/vue.png";
import iconGithub from "@assets/icon/github.png";
import iconVite from "@assets/icon/vite.png";
import iconNodeJS from "@assets/icon/nodejs.png";
import iconNestJS from "@assets/icon/nestjs.png";
import iconBoostraps from "@assets/icon/boostraps.png";
import iconDocker from "@assets/icon/docker.png";
import { Dom } from "@core/dom";

export class Header {
  static className = "main_header";
  $root;
  icons;

  constructor($root: Dom) {
    this.$root = $root;
    this.icons = [
      iconJS,
      iconTS,
      iconNodeJS,
      iconNestJS,
      iconReact,
      iconVue,
      iconWP,
      iconVite,
      iconSCSS,
      iconBoostraps,
      iconGithub,
      iconDocker,
    ];
  }

  toHtml() {
    return `
      <div class="header">
        <p>
          Меня зовут Тимофей и я FullStack разработчик, за время работы я изучил следующие технологии
        </p>
        <div class="imgs">
          ${this.icons.map((icon) => `<img src="${icon}" ${icon === iconGithub || icon === iconVite ? `style="background: #ffff; border-radius: 3px;"` : ""}>`).join(" ")}
        </div>
      </div>
    `;
  }

  init() {}
}
