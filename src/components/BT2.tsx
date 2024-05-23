import React, { useMemo } from 'react';

export default function BT2() {

  const users = [
    { id: 1, name: 'Linh', age: 22 },
    { id: 2, name: 'Liên', age: 17 },
    { id: 3, name: 'Lan', age: 15 },
    { id: 4, name: 'Loan', age: 32 },
  ];
  const adultUsers = useMemo(() => {
    return users.filter(user => user.age > 18);
  }, [users]);

  return (
    <div>Bài tâp 2
      <h2>Danh sách người dùng trên 18 tuổi</h2>
      <ul>
        {adultUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}
