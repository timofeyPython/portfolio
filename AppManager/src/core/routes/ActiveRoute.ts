export class ActiveRoute {
  static get path() {
    return window.location.pathname.split("/")[1];
  }

  static get param() {
    return ActiveRoute.path;
  }

  static navigate(path?: string) {
    window.location.href = path ? path : "/excel";
  }
}
