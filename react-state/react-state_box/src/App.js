import "./styles.css";
import { useState } from "react";

export default function App() {
  // let isActive = false;
  const [active, setActive] = useState(false);

  function handleClick() {
    // isActive = !isActive;
    setActive(!active);

    // Check that the value changes correctly.
    console.log(active);
  }

  return (
    <main>
      <div className={`box ${active ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {active ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
