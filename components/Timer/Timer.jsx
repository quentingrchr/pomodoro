import { TimerContainer } from "./style";
import CircularProgressBar from "./CircularProgressBar";
import { padZero, getProgressPercentage } from "../../utils";

// Timer Component
export default function Timer({
  _,
  minutes,
  seconds,
  completed,
  api,
  duration,
}) {
  const { start, isStarted, pause, stop } = api;
  return (
    <TimerContainer
      onClick={() => {
        if (isStarted()) {
          pause();
        }
        start();
      }}
      text={isStarted() ? "pause" : "start"}
    >
      <p>
        {padZero(minutes)}:{padZero(seconds)}
      </p>
      <CircularProgressBar
        strokeWidth="15"
        sqSize="400"
        percentage={getProgressPercentage(
          duration,
          duration - (minutes * 60 + seconds),
          false
        )}
      />
    </TimerContainer>
  );
}
