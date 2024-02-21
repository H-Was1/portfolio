import React, { useEffect, useState } from "react";

function Time() {
  //Realtime Clock
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "numeric",
        hour12: true,
      });
      setTime(newTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <p>{time}</p>;
}

export default Time;
