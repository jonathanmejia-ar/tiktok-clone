import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/user";
import { ClearButton } from "../theme";

const LogoutButton = (props) => {
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logOut());
  };

  return (
    <ClearButton className={props.className} onClick={logOutUser}>
      Log Out
    </ClearButton>
  );
};

export default LogoutButton;
