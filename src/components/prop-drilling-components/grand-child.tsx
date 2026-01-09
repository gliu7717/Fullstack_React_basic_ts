import React from "react";

const GrandChild = ({ user }: { user: string }) => {
  return (
    <div>
      Welcome <h1>{user}</h1>
    </div>
  );
};

export default GrandChild;
