import React, { useState } from "react";
import Clock from "./Clock";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <h1>🌍 World Clock</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <div className="clocks">
        <Clock label="🇧🇷 Brazil" timezone="America/Sao_Paulo" />
        <Clock label="🇺🇸 USA" timezone="America/New_York" />
        <Clock label="🇯🇵 Japan" timezone="Asia/Tokyo" />
        <Clock label="🇩🇪 Germany" timezone="Europe/Berlin" />
        <Clock label="🇮🇩 Bali" timezone="Asia/Makassar" />
        <Clock label="🌺 Hawaii" timezone="Pacific/Honolulu" />
      </div>
    </div>
  );
}

export default App;