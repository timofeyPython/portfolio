import { ITestError } from "@/types/questionnaire/interfaces";

export default function ({
  answerCorrectId,
  answerUserId,
  number,
  options,
  question,
}: ITestError) {
  return `
    <div style="margin: 25px;">
        <h6>Вопрос ${number + 1}. ${question}</h6>
        <ul">
        ${options
          .map(
            (option) => `
              <li 
                style="${option.id === answerUserId ? `color: #dc3545;` : ""}${option.id === answerCorrectId ? `color: #198754;` : ""}"
              >
                ${option.description}
              </li>
            `,
          )
          .join("")}
        </ul>
    </div>
  `;
}
