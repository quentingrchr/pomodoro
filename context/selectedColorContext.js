import { useState, createContext, useEffect } from "react";

export const SelectedColorContext = createContext(0);

export const SelectedColorProvider = (props) => {
  const [selectedColor, setSelectedColor] = useState(0);
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <SelectedColorContext.Provider value={[selectedColor, setSelectedColor]}>
      {props.children}
    </SelectedColorContext.Provider>
  );
};
