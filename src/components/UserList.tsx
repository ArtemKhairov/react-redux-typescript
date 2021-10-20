import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creator/user";

export const UserList: React.FC = () => {
  // const state=useSelector(state=>state)
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    // console.log(1);
  }, []);

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
        // return <h1>1</h1>;
      })}
    </div>
  );
};
