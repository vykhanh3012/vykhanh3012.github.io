import React from "react";
import LeftSideBar from "./Components/header/LeftSideBar";
import RightSideBar from "./Components/body/RightSideBar";
function MyPage(props) {
  return (
    <React.Fragment>
      <LeftSideBar />
      <RightSideBar />
    </React.Fragment>
  );
}

export default MyPage;
