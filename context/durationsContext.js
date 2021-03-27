import { useState, createContext } from "react";
import data from "../data/data.json";

export const DurationsContext = createContext();

export const DurationsContextProvider = (props) => {
  const [durations, setDurations] = useState(
    data.steps_data.map((step) => step.duration)
  );

  return (
    <DurationsContext.Provider value={[durations, setDurations]}>
      {props.children}
    </DurationsContext.Provider>
  );
};
