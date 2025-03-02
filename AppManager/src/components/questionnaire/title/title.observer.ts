import { HLET } from "@/types/questionnaire/interfaces";
import { Title } from "./Title";

export function observer($el: HLET, $this: Title) {
  const options = {
    rootMargin: "0px",
    threshold: [0, 0.5],
  };

  // callback-функция (возвратная функция)
  const trueCallback = function (entries: Array<{ isIntersecting: boolean }>) {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;
      if (isIntersecting) fn(true);
      else fn(false);
    });
  };

  new IntersectionObserver(trueCallback, options).observe(
    $el.querySelector("#title"),
  ); // запускаем "слежку" за элементом(ами) в константе target

  const fn = (status: boolean) => $this.$emit("info : visibleInfo", status);
}
