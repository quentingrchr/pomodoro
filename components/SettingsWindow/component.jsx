import { useContext, useEffect, useState } from "react";

import {
  Window,
  Header,
  Form,
  FormGroup,
  TimeInputWrapper,
  FormRow,
  ColorLabel,
  RowLeft,
  Button,
} from "./style";

import CloseIcon from "../../icons/CloseIcon";
import CheckMarkIcon from "../../icons/CheckMarkIcon";
import FontSampleIcon from "../../icons/FontSampleIcon";
import InputNumber from "../InputNumber";

import { primaryColors, primaryFonts } from "../../pages/style/theme";
import { SelectedColorContext } from "../../context/selectedColorContext";
import { SelectedFontContext } from "../../context/selectedFontContext";
import { DurationsContext } from "../../context/durationsContext";
import data from "../../data/data.json";

export default function SettingsWindow({ toggle }) {
  const [selectedColor, setSelectedColor] = useContext(SelectedColorContext);
  const [selectedFont, setSelectedFont] = useContext(SelectedFontContext);

  const [durations, setDurations] = useContext(DurationsContext);
  const [values, setValues] = useState({
    color: selectedColor, // number
    durations: durations, // [number]
    font: selectedFont, // number
  });

  useEffect(() => {
    console.log({ selectedColor }, "settings update");
    console.log({ values });
  }, [selectedColor, selectedFont, durations]);

  const handleSubmit = (e) => {
    // submit the local form values to the global state
    e.preventDefault();
    setSelectedColor(values.color);
    setSelectedFont(values.font);
    setDurations(values.durations);
    toggle();
  };

  const updateValues = (field, value) => {
    // update the values of the form state
    setValues((prev) => {
      const newValues = { ...prev };
      if (newValues[field] === undefined) return;
      if (typeof value === "function") {
        // custom callback passing the field as parameter
        newValues[field] = value(newValues[field]);
      } else {
        //simple value
        newValues[field] = value;
      }
      return newValues;
    });
  };

  const handleChangeDurations = (value, i) => {
    updateValues("durations", (oldDuration) => {
      console.log(oldDuration);
      let newDuration = [...oldDuration];
      newDuration[i] = value;
      return newDuration;
    });
  };

  return (
    <Window>
      <Header>
        <h2>Settings</h2>
        <p>"Apply" will reset the current pomodoro</p>
        <button onClick={toggle}>
          <CloseIcon />
        </button>
      </Header>
      <Form selectedFont={0} onSubmit={handleSubmit}>
        <h3>time (minutes)</h3>
        <FormGroup>
          {values.durations.map((duration, i) => {
            const title = data.steps_data[i].title;
            return (
              <TimeInputWrapper key={title}>
                <label>{title}</label>
                <InputNumber
                  onChange={(value) => {
                    handleChangeDurations(value, i);
                  }}
                  defaultValue={duration}
                />
              </TimeInputWrapper>
            );
          })}
        </FormGroup>
        <FormRow>
          <h3>font</h3>
          <RowLeft>
            {primaryFonts.name.map((name, i) => (
              <span key={name}>
                <input
                  onChange={() => {
                    updateValues("font", i);
                  }}
                  type="radio"
                  name="font"
                  value={name}
                  id={name}
                />
                <FontSampleIcon
                  htmlFor={name}
                  isActive={i === values.font}
                  index={i}
                />
              </span>
            ))}
          </RowLeft>
        </FormRow>
        <FormRow>
          <h3>color</h3>
          <RowLeft>
            {primaryColors.name.map((name, i) => (
              <span key={name}>
                <input
                  onChange={() => {
                    updateValues("color", i);
                  }}
                  type="radio"
                  name="color"
                  value={name}
                  id={name}
                />
                <ColorLabel
                  key={name}
                  color={primaryColors.hex[i]}
                  htmlFor={name}
                >
                  {i === values.color && <CheckMarkIcon />}
                </ColorLabel>
              </span>
            ))}
          </RowLeft>
        </FormRow>
        <Button currentColor={values.color}>Apply</Button>
      </Form>
    </Window>
  );
}
