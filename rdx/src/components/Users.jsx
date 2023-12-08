import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store";

export const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      {users.loading ? (
        "loading"
      ) : users.error ? (
        <h2>{users.error}</h2>
      ) : (
        <>
          <h2>User list</h2>
          <ul>
            {users &&
              users.data &&
              users.data.map((user) => {
                return <li key={user.id}>{user.name}</li>;
              })}
          </ul>
        </>
      )}
    </div>
  );
};
