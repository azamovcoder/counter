"use client";

import React, { useEffect } from "react";

import { defaultCounter } from "@/lib/features/counter/counterSlice";
import { defaultWishlist } from "@/lib/features/wishlist/wishlistSlice";
import { useDispatch } from "react-redux";

const DeafaultValues = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(defaultCounter(+localStorage.getItem("counter")));
  }, []);
  useEffect(() => {
    dispatch(
      defaultWishlist(JSON.parse(localStorage.getItem("wishlist")) || [])
    );
  }, []);
  return null;
};

export default DeafaultValues;
