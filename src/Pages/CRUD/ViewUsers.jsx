import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const[getSort,setSort]= useState("")
  const navigate = useNavigate();
  const URL = "https://67d0e3d1825945773eb23066.mockapi.io/Users";

  const fetchUsers = async () => {
    try {
      const response = await axios.get(URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const editUser = (id) => {
    navigate(`/CreateUser?id=${id}`);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filterData = users
    .filter((ele) => ele.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (getSort === "asc") {
        return a.name.localeCompare(b.name);
      } else if (getSort === "desc") {
        return b.name.localeCompare(a.name);
      }
      return 0; 
    });

  

  const tableContainerStyle = {
    margin: "50px auto",
    maxWidth: "800px",
    padding: "20px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
  };

  const buttonStyle = {
    padding: "6px 12px",
    fontSize: "0.9rem",
    borderRadius: "5px",
    margin: "0 5px",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <div style={tableContainerStyle}>
      <h3 className="text-center">User List</h3>
      <div className="row d-flex justify-content-between m-2">
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          className="form-control mb-2 w-25"
          placeholder="Enter Name"
        />
        <select name="" id="" className="form-select mb-2 w-25" onChange={(e)=>setSort(e.target.value)}>
          <option value="">--Select--</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
      <div className="table-responsive">
        <table className="table table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    style={{
                      ...buttonStyle,
                      backgroundColor: "#ffc107",
                      border: "none",
                    }}
                    onClick={() => editUser(user.id)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    style={{
                      ...buttonStyle,
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                    }}
                    onClick={() => deleteUser(user.id)}
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUsers;
