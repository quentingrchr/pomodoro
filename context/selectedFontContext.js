import { useState, createContext } from "react";

export const SelectedFontContext = createContext(0);

export const SelectedFontProvider = (props) => {
  const [selectedFont, setSelectedFont] = useState(0);

  return (
    <SelectedFontContext.Provider value={[selectedFont, setSelectedFont]}>
      {props.children}
    </SelectedFontContext.Provider>
  );
};
