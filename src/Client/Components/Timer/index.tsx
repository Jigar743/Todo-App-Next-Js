import { memo, useEffect, useState } from "react";

function Timer({ targetHour = 0, targetMinute = 0, targetSecond = 0 }) {
  const [seconds, setSeconds] = useState(0);

  const totalTargetSeconds =
    targetHour * 3600 + targetMinute * 60 + targetSecond;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= totalTargetSeconds) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      console.log("Clearing Interval");
      clearInterval(interval);
    };
  }, [totalTargetSeconds]);

  const formateTime = () => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs > 9 ? hrs : `0${hrs}`} : ${mins > 9 ? mins : `0${mins}`} : ${
      secs > 9 ? secs : `0${secs}`
    }`;
  };

  return (
    <div className="w-[300px] m-auto my-8 border rounded-lg flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold text-center">Timer</h1>
      <h4>Timer will close in: {totalTargetSeconds - seconds}</h4>
      <div className="text-center text-4xl font-mono mt-4">{formateTime()}</div>
    </div>
  );
}

export default memo(Timer);
