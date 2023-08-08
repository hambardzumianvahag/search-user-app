import React from "react";

export default function Button({ value, result, setResult }) {
  const getUser = () => {
    fetch(`https://api.github.com/search/users?q=${value}`)
      .then((res) => res.json())
      .then((res) => setResult(res));
  };
  return (
    <div className="Button">
      <button onClick={getUser}>Search</button>
    </div>
  );
}
