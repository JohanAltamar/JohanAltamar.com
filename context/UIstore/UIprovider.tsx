import React, { useState } from "react";
import UIcontext from "./UIcontext";

const UIprovider = ({ children }: { children: React.ReactNode }) => {
  const [showContactModal, setShowContactModal] = useState<string>("");
  return (
    <UIcontext.Provider value={{ showContactModal, setShowContactModal }}>
      {children}
    </UIcontext.Provider>
  );
};

export default UIprovider;
