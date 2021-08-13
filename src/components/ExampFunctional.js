import React, { useState } from "react";

export const ExampFunctional = () => {
  const initValue = () => {
    let sum = 0;
    for (let i; i < 10000; i++) {
      sum += i;
    }
    console.log("aaa");

    return sum;
  };
  const [count, setCount] = useState(() => {
    return initValue();
  });

  const [user, setUser] = useState({
    name: "John",
    age: 22,
  });

  const onClickBtn = () => {
    setCount(count + 1);

    setUser({
      ...user,
      name: "Peter",
    });
  };

  return (
    <>
      <div>Đây là example functional</div>
      <p>Số lần bấm {count} </p>
      <p>{JSON.stringify(user)}</p>
      <button onClick={onClickBtn}>Click me</button>
    </>
  );
};

export default ExampFunctional;
