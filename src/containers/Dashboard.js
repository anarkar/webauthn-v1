import React, { useEffect } from "react";
import AppBar from "../components/AppBar";
import Tabs from "../components/Tabs";
import Snackbar from "../components/SnackBar";
import Filter from "../components/Filter";
import { useNavigate } from "react-router-dom";
import ModalPopup from "../components/ModalPopup";

export default function Dashboard() {
  const history = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [userDetail, setUserDetail] = React.useState("");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userDetails")) === null) {
      history("/");
    } else {
      setUserDetail(JSON.parse(localStorage.getItem("userDetails")).username);
    }
  }, []);
  return (
    <>
      <ModalPopup open={open} setOpen={setOpen} username={userDetail} />
      <Snackbar />
      <AppBar />
      <Tabs />
      <Filter />
    </>
  );
}
