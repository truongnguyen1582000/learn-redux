import React from "react";

function HobbyList(props) {
  const { hobbyList } = props;

  return (
    <ul>
      {hobbyList.map((hobby) => (
        <li key={hobby.id}>{hobby.title}</li>
      ))}
    </ul>
  );
}

export default HobbyList;
