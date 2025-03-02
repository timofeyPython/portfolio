export default function ({
  title,
  description,
  stack,
}: {
  title: string;
  description: string;
  stack?: {
    client?: Array<string>;
    backend?: Array<string>;
    server?: string;
  };
}) {
  return `
    <div>
      <h3 class="display-6">${title}</h3>
      <p class="lead lists">
        <span>
          ${description}
        </span>
        <br>
        <span>
          <strong>Технологии используемые в проекте.</strong> 
        </span>
        <br/>
        ${stack?.client ? `<span><strong>Client: </strong>${stack?.client.map((client) => client).join(", ")}.</span>` : ""} 
        <br/>
        ${stack?.backend ? `<span><strong>Backend: </strong>${stack?.backend.map((backend) => backend).join(", ")}.</span>` : ""}
        <br/>
        ${stack?.server ? `<span><strong>Server: </strong>${stack.server}.</span>` : ""}
      </p>
    </div>
  `;
}
