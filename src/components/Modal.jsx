import React, { useEffect, useState } from "react";

export default function Modal({ setModal, user }) {
	const [follower, setFollower] = useState([])
  const handleChange = () => {
    setModal(false);
  };
  useEffect(() => {
    fetch(user.followers_url)
      .then((r) => r.json())
      .then((r) => setFollower(r));
  }, []);

  return (
    <div className="Modal">
      <div className="image">
        <img src={user.avatar_url} alt="" />
      </div>
      <div className="info">
        <h1>Username: {user.login}</h1>
        <h1>User Type: {user.type}</h1>
        {follower.map((item, index) => {
          return (
            <div key={index}>
              <img className="userimg" src={item.avatar_url} alt="" />
              <p>Username: {item.login}</p>
            </div>
          );
        })}
      </div>
      <span onClick={handleChange}>&#x2715;</span>
    </div>
  );
}
