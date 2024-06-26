import React from "react";
interface User {
  id: number;
  name: string;
  email: string;
}

const UsersTable = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users"); //for static store cache
  const users: User[] = await res.json();
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
