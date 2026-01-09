import React from "react";
import Child from "./child";

const Parent = ({ user }: { user: string }) => {
  return <Child user={user} />;
};

export default Parent;
