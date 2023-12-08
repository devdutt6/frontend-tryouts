import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../../store";

export const IceCream = () => {
  const icecreams = useSelector((state) => state.icecream.numberOfIcecreams);
  const dispatch = useDispatch();

  return (
    <>
      <div>Number of IceCreams - {icecreams}</div>
      <button onClick={() => dispatch(buyIcecream())}>Buy Cake</button>
    </>
  );
};
