import React from 'react';

const FriendSearch = () => {
  return (
    <div className="white_container">
      <div className="field_group" />
      <input
        type="text"
        name="name"
        className="input_field"
        placeholder="add friends"
        autoComplete="off"
      />
    </div>
  );
};

export default FriendSearch;
