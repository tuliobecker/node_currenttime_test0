import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

function Clock({ timezone, label }) {
  const [time, setTime] = useState(moment().tz(timezone).format("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone).format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="clock-box">
      <h2>{label}</h2>
      <p>{time}</p>
    </div>
  );
}

export default Clock;
