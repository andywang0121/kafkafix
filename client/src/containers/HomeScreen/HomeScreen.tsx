import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootState } from "../../state/reducers/index";
import { StartContainer } from "./StartContainer/StartContainer";
import NavBar from "./Sidepanel/NavBar";
import { TopicsTable } from "./TopicsTable/TopicsTable";

import "../../../stylesheets/HomeScreen.css";

export const HomeScreen: FC = () => {
  const email = useSelector((state: RootState) => state.user.email);
  const history = useHistory();
  if (!email) history.push("/");

  return (
    <React.Fragment>
      <NavBar />
      <div className="homeContainer">
        <StartContainer />
        <TopicsTable />
      </div>
      {/* <button onClick={()=>dispatch(logoutActionCreator())}>Sign Out</button> */}
    </React.Fragment>
  );
};
