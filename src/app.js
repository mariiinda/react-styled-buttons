import React, { useState } from "react";
import ReactDOM from "react-dom";

import Buttons from "./ui/Buttons";

function App() {
  const [mode, setMode] = useState("light");
  return <Buttons mode={mode} setMode={setMode} />;
}

ReactDOM.render(<App />, document.getElementById("root"));
