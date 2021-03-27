import { useState, useEffect } from "react";

import { Input, Container, Controls } from "./style";
import ChevronUpIcon from "../../icons/ChevronUpIcon";
import ChevronDownIcon from "../../icons/ChevronDownIcon";

export default function InputNumber({ defaultValue, onChange, ...rest }) {
  const [value, setValue] = useState(defaultValue || null);

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  const handleChange = (e) => {
    if (parseInt(e.target.value) <= 0) return;
    setValue(parseInt(e.target.value));
  };

  const incr = () => {
    setValue((v) => v + 1);
  };

  const decr = () => {
    if (value - 1 <= 0) return;
    setValue((v) => v - 1);
  };

  return (
    <Container>
      <Input
        {...rest}
        type="number"
        selectedFont={0}
        value={value}
        onChange={handleChange}
      />
      <Controls>
        <span onClick={incr}>
          <ChevronUpIcon />
        </span>
        <span onClick={decr}>
          <ChevronDownIcon />
        </span>
      </Controls>
    </Container>
  );
}
