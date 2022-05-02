import React from "react";
import LeftSideBar from "./Components/header/LeftSideBar";
import RightSideBar from "./Components/body/RightSideBar";
import { PageStyled } from "./Components/style/index";
import { ComponentsData } from "./Data/index";
function MyPage(props) {
  const [newValue, setNewValue] = React.useState(0);

  const indexForm = (newValue) => {
    setNewValue(newValue);
  };

  return (
    <React.Fragment>
      <PageStyled>
        <LeftSideBar indexForm={indexForm} componentsData={ComponentsData} />
        <RightSideBar newValue={newValue} componentsData={ComponentsData} />
      </PageStyled>
    </React.Fragment>
  );
}

export default MyPage;
