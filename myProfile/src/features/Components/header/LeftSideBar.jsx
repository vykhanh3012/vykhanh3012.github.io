import React from "react";
import { LeftSideBars } from "../style";
function LeftSideBar(props) {
  const { componentsData } = props;
  const [value, setValue] = React.useState(0);
  const renderComponents = (index) => {
    props.indexForm(index);
    setValue(index);
  };
  const [theme, setTheme] = React.useState(true);

  const changeTheme = () => {
    setTheme(!theme);
    const ele = document.getElementById("MyTest");
    ele.classList.toggle("open");
    if (ele.classList.contains("open")) {
      ele.classList.remove("sun");
    } else {
      ele.classList.toggle("sun");
    }
  };

  return (
    <LeftSideBars>
      <div className="header">
        {/* <div className="header-item logo">Logo</div> */}
        <div
          onClick={changeTheme}
          style={
            theme === true
              ? {
                  backgroundColor: "#ff4e00",
                  backgroundImage:
                    "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
                }
              : {}
          }
          className="header-item changeTheme"
          id="MyTest"
        >
          <i
            class={theme === false ? "fa-solid fa-moon" : "fa-solid fa-sun"}
          ></i>
        </div>
        {/* <div className="header-item changeLanguage">Change Language</div> */}
        <div className="header-item component">
          <div className="container">
            <ul className="items">
              {componentsData.map((item, index) => (
                <li onClick={() => renderComponents(index)} className="links">
                  {item.icons} 
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </LeftSideBars>
  );
}

export default LeftSideBar;
