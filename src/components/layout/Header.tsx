"use client";
import Link from "next/link";
import logo from "/public/logo.webp";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { ShoppingCart } from "lucide-react";

const Header = () => {
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  return (
    <div className="flex justify-between items-center py-6 px-28">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-40" />
      </Link>
      <ul className="flex gap-x-10">
        <li className="text-lg">
          <Link href={"category/female"}>Female</Link>
        </li>
        <li className="text-lg">
          <Link href={"category/male"}>Male</Link>
        </li>
        <li className="text-lg">
          <Link href={"category/kids"}>Kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"category/sports"}>Sports</Link>
        </li>
        <li className="text-lg">
          <Link href={"products"}>All Products</Link>
        </li>
      </ul>
      {/* <input /> */}
      <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
        <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-sx text-center">
          {cartValue}
        </span>
        <ShoppingCart className="h-6 w-6" />
      </div>
    </div>
  );
};

export default Header;
