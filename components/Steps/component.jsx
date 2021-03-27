import { useContext } from "react";
import { StepsContainer, Step } from "./style";
import { SelectedColorContext } from "../../context/selectedColorContext";

export default function Steps({ steps, current }) {
  const [selectedColor] = useContext(SelectedColorContext);

  return (
    <StepsContainer>
      {steps.map((step, i) => (
        <Step
          selectedColor={selectedColor}
          key={step.name}
          active={i === current}
        >
          {step.title}
        </Step>
      ))}
    </StepsContainer>
  );
}
