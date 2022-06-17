import React, { useState, Fragment } from "react";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";

function App() {

  const [users, setUsers] = useState([]);

  function onAddHandler(uName, uAge) {
    setUsers((prevUser) => [
      ...prevUser,
      {
        name: uName,
        age: uAge,
      },
    ]);
  }

  function onDeleteHandler(index) {
    setUsers((users) => {
      return users.filter((e, i) => {
        return i !== index;
      });
    });
  }

  return (
    <Fragment>
      <AddUser onAdd={onAddHandler} />
      {users.length && (
        <UserList
          users={users}
          setUsers={setUsers}
          onDelete={onDeleteHandler}
        />
      )}
    </Fragment>
  );
}

export default App;
