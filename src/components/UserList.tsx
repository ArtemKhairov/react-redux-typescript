import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
    // console.log(users)
  },[]);

  if (loading) {
    return <h1>Идёт загрузка,пододвинься</h1>;
  }
  if (error) {
    return <h1>Error has been or ne been</h1>;
  }

  return (
    <div>
      {users.map((user, index) => {
        return <div key={index}>{user.name}</div>;
      })}
    </div>
  );
};
