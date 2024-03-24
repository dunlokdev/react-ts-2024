import React from "react";

interface IUser {
  name: string;
  age: number | string;
  city: string;
  className?: string;
}

const User = ({ name, age, city, className }: IUser) => {
  return (
    <div className={className}>
      Xin chào {name}, {age} tuổi, đến từ {city}
    </div>
  );
};

export default User;
