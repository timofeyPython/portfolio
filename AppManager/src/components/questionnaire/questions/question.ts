export default function (
  {
    id,
    question,
    options,
    number,
  }: {
    id: string;
    number: number;
    question: string;
    options: {
      id: string;
      description: string;
    }[];
  },
  answer: {
    questionId: string;
    answerId: string;
    date: Date;
    save: boolean;
  } | null,
) {
  return `
    <form> 
      <section data-section="${id}" class="content">
        <p>${number + 1} : ${question}</p>
        ${
          Array.isArray(options) &&
          options
            .map(
              (option) => `
                  <div class="form-check">
                    <input 
                        class="form-check-input" 
                        type="radio" 
                        name="flexRadioDefault"
                        id="${option.id}${number}"
                        data-question="${id}"
                        data-answer="${option.id}"
                        ${answer?.save ? "disabled" : ""}
                        ${answer?.answerId === option.id ? "checked" : ""}
                    >
                    <label class="form-check-label" for="${option.id}${number}">
                        ${option.description}
                    </label>
                  </div>
              `,
            )
            .join("")
        }
        ${
          answer?.save
            ? ""
            : `
          <div style="margin: auto; text-align: end;">
            <button 
              class="btn btn-outline-dark" 
              id="${id}"
            >
              Ответить
            </button>
          </div>
          `
        }
      </section>
    </form>
  `;
}
