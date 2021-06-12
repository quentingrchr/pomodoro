import { useContext } from "react";
import { StepsContainer, Step } from "./style";
import { SelectedColorContext } from "../../context/selectedColorContext";
import { SelectedFontContext } from "../../context/selectedFontContext";

export default function Steps({ steps, current }) {
  const [selectedColor] = useContext(SelectedColorContext);
  const [selectedFont] = useContext(SelectedFontContext);

  return (
    <StepsContainer>
      {steps.map((step, i) => (
        <Step
          selectedColor={selectedColor}
          selectedFont={selectedFont}
          key={step.name}
          active={i === current}
        >
          {step.title}
        </Step>
      ))}
    </StepsContainer>
  );
}
