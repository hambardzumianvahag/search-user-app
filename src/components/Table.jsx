import React from "react";
import Modal from "./Modal";
import { useState } from "react";

export default function Table({ result }) {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null)
  const handleModal = (user) => {
    setModal(true);
    setUser(user);
  };
  return (
    <div>
      {result && (
        <div>
          <h1 className="Count">{result.total_count} Users</h1>
          <table>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>More</th>
            </tr>
            {result.items.map((item, index) => (
              <tr key={index}>
                <td>
                  <img className="userimg" src={item.avatar_url} alt="chexav" />
                </td>
                <td>{item.login}</td>
                <td>
                  <button className="More" onClick={()=>handleModal(item)}>
                    Show More
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
      {modal ? <Modal user={user} setModal={setModal}  /> : null}
    </div>
  );
}
