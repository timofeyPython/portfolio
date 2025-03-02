import { $, Dom } from "@/core/dom";

export default function (html: string, $root: Dom) {
  const modal = $.create("div", "main_modal");
  const body = document.body;

  modal._html(html);
  const close = $(<HTMLElement>modal.$el.querySelector("#close"));
  close._on("click", () => {
    modal._setCSS({ opacity: "0" });
    setTimeout(() => {
      modal.$el.remove();
      body.style.overflowY = "auto";
    }, 1000);
  });
  modal._setCSS({ opacity: "0" });
  body.style.height = "100vh";
  body.style.overflowY = "hidden";
  $root._append(modal);

  setTimeout(() => modal._setCSS({ opacity: "1" }), 300);

  return modal;
}
