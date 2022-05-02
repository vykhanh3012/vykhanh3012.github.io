import React from "react";
import { RightSideBars } from "../style";
export default function RightSideBar(props) {
  const { newValue, componentsData } = props;
  return (
    <RightSideBars>
      {componentsData.map(
        (item, index) => newValue === index && item.components
      )}
    </RightSideBars>
  );
}
