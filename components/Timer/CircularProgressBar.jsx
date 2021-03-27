// Circular Progress Bar Component
import { useContext } from "react";
import { CircularProgressBarContainer } from "./style";
import { SelectedColorContext } from "../../context/selectedColorContext";

export default function CircularProgressBar(props) {
  const [selectedColor] = useContext(SelectedColorContext);

  const sqSize = props.sqSize;
  const radius = (props.sqSize - props.strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * props.percentage) / 100;

  return (
    <CircularProgressBarContainer selectedColor={selectedColor}>
      <svg width={props.sqSize} height={props.sqSize} viewBox={viewBox}>
        <circle
          className="circle-background"
          cx={props.sqSize / 2}
          cy={props.sqSize / 2}
          r={radius}
          strokeWidth={`${props.strokeWidth}px`}
        />
        <circle
          className="circle-progress"
          cx={props.sqSize / 2}
          cy={props.sqSize / 2}
          r={radius}
          strokeWidth={`${props.strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
    </CircularProgressBarContainer>
  );
}
