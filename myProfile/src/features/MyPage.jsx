import React from "react";
import LeftSideBar from "./Components/header/LeftSideBar";
import RightSideBar from "./Components/body/RightSideBar";
import { PageStyled } from "./Components/style/index";
function MyPage(props) {
  return (
    <React.Fragment>
      <PageStyled>
        <LeftSideBar />
        <RightSideBar />
      </PageStyled>
    </React.Fragment>
  );
}

export default MyPage;
