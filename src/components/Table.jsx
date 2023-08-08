import React from "react";

export default function Table({ result }) {
  // console.log(result);
  return (
    <div>
      {result && (
        <div>
          <h1 className="Count">{result.total_count} Users</h1>
          <table>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
            {result.items.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.avatar_url} alt="chexav" />
                </td>
                <td>{item.login}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
