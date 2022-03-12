import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const history = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("isValid"), "localStorage.getItem");
    if (localStorage.getItem("isValid") !== "yes") {
      history("/login");
    }
  }, []);
  return <div>Dashboard</div>;
}
