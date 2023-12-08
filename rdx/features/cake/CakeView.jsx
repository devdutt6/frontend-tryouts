import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cakeActions } from "./cakeSlice";

export const CakeView = () => {
  const cake = useSelector((state) => state.cake.numberOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {cake}</h2>
      <button onClick={() => dispatch(cakeActions.ordered())}>buy Cake</button>
      <button onClick={() => dispatch(cakeActions.restocked(4))}>
        restock Cake
      </button>
    </div>
  );
};
