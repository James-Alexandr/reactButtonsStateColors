import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const btns = [
  { content: "ALL", className: "all" },
  { content: "WATCH", className: "watch" },
  { content: "READ", className: "read" }
];

function App() {
  const [select, setSelect] = React.useState(null);
  return (
    <div className="App">
      <div className="filter-panel-button">
        {btns.map(b => (
          <button
            key={b.content}
            className={`filter-panel-button--${b.className} ${
              select === b.content ? "active" : ""
            }`}
            onClick={() => setSelect(b.content)}
          >
            {b.content}
          </button>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
