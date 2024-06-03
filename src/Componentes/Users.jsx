import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedData = useLoaderData()
    const [users, setUsers] = useState(loadedData)

    const handleDelete = id=>{
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const remaining = users.filter(user=>user._id !== id)
            setUsers(remaining)
        })

    }

    return (
        <div>
            <h2>Loaded data: {loadedData.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>MetaData</th>
        <th>LAST LOGGED IN</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        users.map(user=><tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.metaData}</td>
            <td>{user.lastSignInTime}</td>
            <td>
                <button onClick={()=>handleDelete(user._id)}>X</button>
            </td>
          </tr>)
    }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;