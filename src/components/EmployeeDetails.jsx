import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/employee/${id}`).then((data) => {
      setShow(data.data);
    });
  }, []);

  return (
    <div className="user_details">
      <img className="user_image" src={show.image} />
      <h4 className="user_name">{show.employee_name}</h4>
      <span className="user_salary">${show.salary}</span>
      <span className="tasks">
        <li className="task">{show.tasks}</li>
      </span>
      Status: <b className="status">{show.status}</b>
      Title: <b className="title">{show.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      {show.status === "working" ? (
        <button className="fire">Fire Employee</button>
      ) : null}
      {/* Show this button only if user is not already team lead or terminated */}
      {show.status !== "terminated" || show.status !== "Team Lead" ? (
        <button className="promote">promote</button>
      ) : null}
    </div>
  );
};
