/* eslint-disable @typescript-eslint/no-explicit-any */
export function utils() {
  function capitalize(string: string) {
    if (typeof string != "string") {
      return ``;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getMethodName(eventName: string) {
    return `on` + capitalize(eventName);
  }

  function storage(key: string, data: null | any = null) {
    if (!data) {
      return JSON.parse(localStorage.getItem(key));
    }

    localStorage.setItem(key, JSON.stringify(data));
  }

  function removeStorage(key: string) {
    localStorage.removeItem(key);
  }

  function debounce(fn: any, wait: number) {
    let timeout: string | number | NodeJS.Timeout;
    return function (...args: any) {
      const later = () => {
        clearTimeout(timeout);

        fn.apply(this, args);
        // fn(...args)
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function isEqual(a: object, b: object) {
    if (typeof a === "object" && typeof b === "object") {
      return JSON.stringify(a) === JSON.stringify(b);
    }
    return a == b;
  }

  function rewind(array: Array<any>) {
    const res = array;
    let m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = res[m];

      res[m] = res[i];
      res[i] = t;
    }

    return res;
  }

  function getTime(date: Date) {
    const ss = Math.floor(
      ((new Date().getTime() - date.getTime()) / 1000) % 60,
    );
    const mm = Math.floor(
      ((new Date().getTime() - date.getTime()) / (1000 * 60)) % 60,
    );
    const hh = Math.floor(
      ((new Date().getTime() - date.getTime()) / (1000 * 60 * 60)) % 60,
    );
    return { ss, mm, hh };
  }

  function getLocation(num = 1) {
    return window.location.pathname.split("/")[num];
  }

  function getLocations() {
    return window.location.pathname.split("/");
  }

  function getHash() {
    return window.location.hash;
  }

  function value(state: any, field: any, action: any) {
    const val = state[field] || {};
    // убираем мутацию
    // const val = {...state[field]}
    val[action.data.id] = action.data.value;
    return val;
  }

  function clone(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  function camelToDashCase(str: string) {
    return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
  }

  function toInlineStyle(styles: { [key: string]: string }) {
    return Object.keys(styles)
      .map((key) => `${camelToDashCase(key)}: ${styles[key]}`)
      .join(";");
  }

  function calcus(str: string) {
    return str;
  }

  return {
    getMethodName,
    storage,
    debounce,
    isEqual,
    removeStorage,
    rewind,
    getTime,
    getLocation,
    value,
    clone,
    getHash,
    toInlineStyle,
    getLocations,
    calcus,
  };
}
