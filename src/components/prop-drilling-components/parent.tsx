import React from "react";
import Child from "./child";

const Parent = ({ children }: { children: React.ReactNode }) => {
  return <Child>{children}</Child>;
};

export default Parent;
