/* eslint-disable @typescript-eslint/no-explicit-any */
import cookie from "cookiejs";

export function getParamsCookie(cookieName: string, param: string, value = "") {
  const userSelection = cookie.get(cookieName);
  if (!userSelection) {
    cookie.set(
      cookieName,
      JSON.stringify({
        [param]: value,
      }),
    );
  } else {
    if (typeof userSelection === "string") {
      const object = JSON.parse(userSelection);
      const check = Object.prototype.hasOwnProperty.call(object, param);
      if (check) {
        cookie.set(
          cookieName,
          JSON.stringify({
            [param]: value,
          }),
        );
      }

      return check ? object[param] : value;
    }
  }

  return value;
}

export function parseString(text: string, index: number) {
  const regex = /^(\w+):(\w+)\/update$/;
  const result = text.match(regex);
  if (result) return result[index + 1];
  else return "";
}

export function checkValues(
  entries: Array<{
    value: string | number | null | undefined | boolean;
    description: string;
  }>,
) {
  const message: string[] = [];
  let result = true;

  if (Array.isArray(entries)) {
    entries.forEach((entry) => {
      if (!entry.value) {
        message.push(entry.description);
        result = false;
      }
    });
  }
  return {
    result,
    message,
  };
}
