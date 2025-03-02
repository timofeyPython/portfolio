import { defaultStyles } from "@/core/utils/constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toButton(button: { icon: string; active: boolean; value: any }) {
  const json = JSON.stringify(button.value);
  const meta = `data-type="button" data-value='${json}'`;

  return `
    <div 
      class="button ${button.active ? "active" : ""}"
      ${meta}
    >
      <i class="material-icons" ${meta}>
        ${button.icon}
      </i>
    </div>`;
}

export function createToolbar(state: typeof defaultStyles) {
  const buttons = [
    {
      icon: "format_align_left",
      active: state["textAlign"] === "left",
      value: { textAlign: "left" },
    },
    {
      icon: "format_align_center",
      active: state["textAlign"] === "center",
      value: { textAlign: "center" },
    },
    {
      icon: "format_align_right",
      active: state["textAlign"] === "right",
      value: { textAlign: "right" },
    },
    {
      icon: "format_bold",
      active: state["fontWeight"] === "bold",
      value: { fontWeight: state["fontWeight"] === "bold" ? "normal" : "bold" },
    },
    {
      icon: "format_italic",
      active: state["fontStyle"] === "italic",
      value: {
        fontStyle: state["fontStyle"] === "italic" ? "normal" : "italic",
      },
    },
    {
      icon: "format_underlined",
      active: state["textDecoration"] === "underline",
      value: {
        textDecoration:
          state["textDecoration"] === "underline" ? "none" : "underline",
      },
    },
  ];
  return buttons.map(toButton).join("");
}
