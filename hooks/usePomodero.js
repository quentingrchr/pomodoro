import { useState } from "react";

export default function usePomodero() {
  const [cycles, setCycles] = useState(0);
  const [state, setState] = useState(0);
  const [shortBreaks, setShortBreaks] = useState(0);
  function onEnd() {
    if (shortBreaks % 3 === 0 && shortBreaks !== 0 && state === 0) {
      // End of one full cycle
      // Change the state to "long_break" mode
      setState(2);
      // Add 1 cycle
      // Reset shortBreaks
    } else {
      if (state == 0) {
        // End of "pomodero"
        // Change the state to "short_break" mode
        setState(1);
        // Add 1 short break
        setShortBreaks((prev) => prev + 1);
      } else if (state === 1) {
        // End of short break
        // Change the state to "pomodero"
        setState(0);
      } else if (state == 2) {
        // End of long break
        // Change the state to "pomodero"
        setState(0);
        setCycles((prev) => prev + 1);
        setShortBreaks(0);
      }
    }
  }
  console.log([state, onEnd]);

  return [state, onEnd];
}
