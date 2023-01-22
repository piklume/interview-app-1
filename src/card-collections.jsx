import React from "react";
import UserCard from "./user-card";

const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
}

const CardCollection = ({ userList }) => {
  return (
    <div style={style}>
      {userList.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CardCollection;
