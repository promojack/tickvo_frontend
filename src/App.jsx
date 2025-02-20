import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-accent2 font-bold text-6xl bg-white flex p-5 border-primary border-2 h-screen">
      Hello Tickvo
    </div>
  );
}

export default App;
