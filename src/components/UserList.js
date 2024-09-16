// src/components/UserList.js
import React from "react";
import { useSelector } from "react-redux";
import styles from "./UserList.module.css";

const UserList = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <div className={styles.userListContainer}>
      <h2 className={styles.title}>Список пользователей</h2>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userItem}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
