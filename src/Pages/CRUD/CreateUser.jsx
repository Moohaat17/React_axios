import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

const CreateUser = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const URL = "https://67d0e3d1825945773eb23066.mockapi.io/Users";

  useEffect(() => {
    if (userId) {
      axios
        .get(`${URL}/${userId}`)
        .then((response) => {
          const { name, email, phone } = response.data;
          setValue("name", name);
          setValue("email", email);
          setValue("phone", phone);
        })
        .catch((error) => console.error("Error fetching user:", error));
    }
  }, [userId, setValue]);

  const onSubmit = async (data) => {
    try {
      if (userId) {
        await axios.put(`${URL}/${userId}`, data);
        alert("User updated successfully");
      } else {
        await axios.post(URL, data);
        alert("User added successfully");
      }
      reset();
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formStyle = {
    width: "400px",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
    margin: "50px auto",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <h3 className="text-center">{userId ? "Update" : "Create"} User</h3>
        <div className="mt-4">
          <input
            type="text"
            {...register("name", { required: true })}
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="mt-4">
          <input
            type="email"
            {...register("email", { required: true })}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="mt-4">
          <input
            type="tel"
            {...register("phone", { required: true })}
            className="form-control"
            placeholder="Enter Phone"
          />
        </div>
        <div className="mt-4 text-center">
          <button type="submit" style={buttonStyle}>
            {userId ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
