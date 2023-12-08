import React, { useEffect } from "react";
import { userStore } from "./userStore";

export const User = () => {
  const { loading, isError, error, users, fetch } = userStore((state) => state);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>{error}</h2>
      ) : (
        <ul>
          {users &&
            users.length > 0 &&
            users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      )}
    </div>
  );
};
