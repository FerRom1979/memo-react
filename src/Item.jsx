import React, { memo, useEffect } from "react";

const Item = memo(({ user, handleDelete }) => {
  useEffect(() => {
    /* console.log("Item render " + user.name); */
  });
  return (
    <div>
      <li>{user.name}</li>
      <button onClick={() => handleDelete(user.id)}>Delete</button>
    </div>
  );
});

export default Item;
