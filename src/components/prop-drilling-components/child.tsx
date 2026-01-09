import React from "react";
import GrandChild from "./grand-child";

const Child = ({ user }: { user: string }) => {
  return <GrandChild user={user} />;
};

export default Child;
