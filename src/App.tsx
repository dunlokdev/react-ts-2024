import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import Test from "./examples/Test";
import Video10 from "./examples/Video10";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Video10 />
    </div>
  );
}

export default App;
