import axios from "axios";
import { useState, useEffect } from "react";
import "./Employee.css";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get("http://localhost:8080/employee").then((data) => {
      setData(data.data);
    });
  };
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {data.map((e) => {
        return (
          <Link to={`/employees/${e.id}`} key={e.id}>
            <div className="employee_card">
              <img className="employee_image" src={e.image} />
              <span className="employee_name">{e.employee_name}</span>
              <span className="employee_title">{e.title}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
