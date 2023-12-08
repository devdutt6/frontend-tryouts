import React, { useState } from "react";
import { useCakeStore } from "./CakeStore";

export const Cake = () => {
  const [restock, setRestock] = useState(0);
  const { buyCake, restockCakes, getState } = useCakeStore((state) => state);

  const { cakes, boughtCakes } = getState();

  return (
    <div>
      <button onClick={buyCake}>Buy One Cake</button>
      <h2>{cakes} remaining</h2>
      <h2>{boughtCakes} bought</h2>
      <br />
      <input
        type="number"
        value={restock}
        onChange={(e) => setRestock(e.target.value)}
        style={{ marginTop: "10px" }}
      />
      <br />
      <button
        onClick={() => restockCakes({ cakes: restock })}
        style={{ marginTop: "10px" }}
      >
        Restock {restock} Cake
      </button>
    </div>
  );
};
