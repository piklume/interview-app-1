import React from "react";

const style = {
  border: "2px solid black",
  padding: "5px 0 5px 10px",
};

const UserCard = ({ user }) => {
  const { id, name, email, phone } = user;

  return (
    <div style={style}>
      <h4>{`Pal ID: ${id}`}</h4>
      <h3>{name}</h3>
      <h5>{email}</h5>
      <h5>{phone}</h5>
    </div>
  );
};

export default UserCard;
