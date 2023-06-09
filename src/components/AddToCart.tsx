"use client";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

const AddToCart = () => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.addToCart({ product: {}, quantity: 1 }));
    toast.success("Product added");
  };
  return <Button onClick={addItem}>Add to Cart</Button>;
};
export default AddToCart;
