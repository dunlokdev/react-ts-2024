import React, { useState } from "react";

const Test: React.FC = () => {
  const [name, setName] = useState("Dương Mỹ Lộc");
  let age: string | number = 21;

  age = 'string'

  return <div>Xin chào {name}</div>;
};

export default Test;
