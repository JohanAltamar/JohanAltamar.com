import { createContext, useContext } from "react";

interface UIcontext {
  showContactModal: string;
  setShowContactModal: React.Dispatch<React.SetStateAction<string>>;
}

const UIcontext = createContext<Partial<UIcontext>>({});

export const useUIcontext = () => {
  return useContext(UIcontext);
};

export default UIcontext;
