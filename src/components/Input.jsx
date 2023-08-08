import React from "react";

export default function Input({ value, setValue }) {
	const getValue=(e)=>{
		setValue(e.target.value)
	}
  return (
    <div className="Input">
      <input type="text" placeholder="Search User's nickname" onChange={getValue} />
    </div>
  );
}
