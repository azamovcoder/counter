"use client";

import React, { useEffect } from "react";

import { defaultCounter } from "@/lib/features/counter/counterSlice";
import { useDispatch } from "react-redux";

const DeafaultValues = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(defaultCounter(+localStorage.getItem("counter")));
  }, []);
  return null;
};

export default DeafaultValues;
