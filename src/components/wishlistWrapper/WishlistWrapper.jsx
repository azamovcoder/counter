"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const WishlistWrapper = () => {
  let wishlistData = useSelector((state) => state.wishlist.value);
  console.log(wishlistData);
  return (
    <div>
      WishlistWrapper
      {wishlistData?.map((product) => (
        <div className="" key={product?.id}>
          <Image
            src={product?.images[0]}
            alt={product?.title}
            width={200}
            height={200}
          />
          <p>{product?.title}</p>
          <button onClick={() => dispatch(toggleHeart(product))}>Like</button>
        </div>
      ))}
    </div>
  );
};

export default WishlistWrapper;
