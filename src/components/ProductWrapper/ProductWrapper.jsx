"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "@/lib/api/productAPI";

const ProductWrapper = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetProductsQuery({ limit: 5, skip: 30 });
  console.log(data);
  return (
    <div>
      <h2>ProductWrapper</h2>
      <Link href={"/wishlist"}>Wishlist </Link>
      {data?.products?.map((product) => (
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

export default ProductWrapper;
