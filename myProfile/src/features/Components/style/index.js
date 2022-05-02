import styled from "styled-components";

export const PageStyled = styled.div`
  max-width: 1440px;
  height: 200vh;
  width: 100%;
  height: 100%;
  margin: auto;
  color: #000;
  display: flex;
  padding: 20px;
`;

export const LeftSideBars = styled.div`
  flex-shrink: 1;
  width: 20%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  position: relative;
  .header {
    &-item {
      margin-bottom: 20px;
    }
    .changeTheme{
      width: 60px;
      height: 60px;
      border-radius: 100%;
      cursor: pointer;
      position: relative;
      background-color: #485461;
background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
      i{
        position: absolute;
        top: 25%;
        left: 25%;
        font-size: 30px;
        color : #fff;
        transition: all 0.5s ease;
        /* animation: slide 0.5s forwards; */
      }
    }
    .open{
      i{
        transition: all 0.5s ease;
        animation: slide 0.7s forwards;
      }
      @keyframes slide{
        from {
          top: 100%;
        }
        to {
          top: 25%;
        }
      }
    }
    .sun{
      i{
        transition: all 0.5s ease;
        animation: slideSun 0.7s forwards;
      }
      @keyframes slideSun{
        from {
          top: 100%;
        }
        to {
          top: 25%;
        }
      }
    }
    .component {
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: 200px;
      .container {
        /* background-color: #d9e4f5;
        background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%); */
        border-radius: 20px;
        max-width: 120px;
        .items {
          list-style-type: none;
          margin: 0;
          padding: 15px;
          .links {
            cursor: pointer;
            width: 30px;
            height: 30px;
            border: 100%;
            background-color: gray;
            text-align: center;
            padding: 5px;
            border-radius: 100%;
            background-color: #ff4e00;
            background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);
            &:not(:last-child) {
              margin-bottom: 50px;
            }
            i {
              position: relative;
              top: 20%;
              color: white;
              /* position: relative;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%); */
            }
          }
        }
      }
    }
  }
`;

export const RightSideBars = styled.div`
  width: 80%;
`;
