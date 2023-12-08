import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { icecreamActions } from "./icecreamSlice";

export const IcecreamView = () => {
  const icecream = useSelector((state) => state.icecream.numberOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecreams - {icecream}</h2>
      <button onClick={() => dispatch(icecreamActions.buyed())}>
        buy Icecream
      </button>
      <button onClick={() => dispatch(icecreamActions.restocked(4))}>
        restock Icecream
      </button>
    </div>
  );
};
