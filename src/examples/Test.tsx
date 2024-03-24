import React, { useState } from "react";

const Test: React.FC = () => {
  const [name, setName] = useState<string>("Dương Mỹ Lộc");
  const [listUser, setListUser] = useState<string[] | undefined>([
    "Dương Mỹ Lộc",
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
  ]);

  return <div>Xin chào {name}</div>;
};

export default Test;
