"use client";

import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { increment } from "@/lib/features/counter/counterSlice";

const Header = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Header {count}</h2>
      <button onClick={() => dispatch(increment())}>inc</button>
    </div>
  );
};
export default Header;
