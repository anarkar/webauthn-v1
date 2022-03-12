import React, { useEffect } from "react";
import AppBar from '../components/AppBar'
import Tabs from '../components/Tabs'
import Snackbar from '../components/SnackBar'
import Filter from '../components/Filter';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  // const history = useNavigate();

  // useEffect(() => {
  //   console.log(localStorage.getItem("isValid"), "localStorage.getItem");
  //   if (localStorage.getItem("isValid") !== "yes") {
  //     history("/login");
  //   }
  // }, []);
  return <> <Snackbar/><AppBar/><Tabs/><Filter/></>;
}
