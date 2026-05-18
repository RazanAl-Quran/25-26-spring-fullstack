import { useEffect, useState } from 'react';
import UsersTable from './components/UsersTable';
import AddUserForm from './components/AddUserForm';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const result = await fetch("http://localhost:5000/api/users/");
    const allusers = await result.json();
    setUsers(allusers);
  }

  const deleteUser = async (id) => {
    const result = await fetch(`http://localhost:5000/api/users/${id}`, {
      method: "delete"
    });
    fetchUsers();
  }

  const addUser = async (user) => {
    await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    // or
    // await axios.post(`http://localhost:3000/api/users/`, user);
    fetchUsers(); // refresh the list
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <>
      <AddUserForm onAdd={addUser} />
      <UsersTable users={users} onDelete={deleteUser} />
    </>
  )
}

export default App
