import "./header.scss";
import { useState } from "react";

export function Header() {
  const [date, setDate] = useState(
    `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
  );
  setInterval(
    () =>
      setDate(
        `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      ),
    1000,
  );

  return (
    <>
      <div className="header">
        <div>
          <span>Время: {date}</span>
        </div>
      </div>
    </>
  );
}
