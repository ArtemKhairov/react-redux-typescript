import React from "react";
import { useSelector } from "react-redux";

export const UserList: React.FC = () => {
  const state=useSelector(state=>state)
  console.log(state)
  return <div>1</div>;
};
