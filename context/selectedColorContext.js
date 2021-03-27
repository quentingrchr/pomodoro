import { useState, createContext, useEffect } from "react";

export const SelectedColorContext = createContext(0);

export const SelectedColorProvider = (props) => {
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let localColor = window.localStorage.getItem("pomodoro_color");
      setSelectedColor(localColor);
    }
    return () => {};
  }, []);
  useEffect(() => {
    window.localStorage.setItem("pomodoro_color", selectedColor);
    console.log(selectedColor);
    return () => {};
  }, [selectedColor]);
  return (
    <SelectedColorContext.Provider value={[selectedColor, setSelectedColor]}>
      {props.children}
    </SelectedColorContext.Provider>
  );
};
