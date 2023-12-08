import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../../store";

export const NewCake = () => {
  const cakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const [cake, setCake] = useState(1);

  return (
    <>
      <div>Number of Cake - {cakes}</div>
      <input
        type="number"
        value={cake}
        onChange={(e) => {
          console.log(e.target.value);
          setCake(e.target.value);
        }}
      />
      <button onClick={() => dispatch(buyCake(cake))}>Buy click</button>
    </>
  );
};
