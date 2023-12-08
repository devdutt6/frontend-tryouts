import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../../store";

export const CakeHook = () => {
  const cakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <div>Number of Cake - {cakes}</div>
      <button onClick={() => dispatch(buyCake())}>Buy click</button>
    </>
  );
};
