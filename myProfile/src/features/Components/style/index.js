import styled from "styled-components";

export const PageStyled = styled.div`
  max-width: 1440px;
  height: 200vh;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin: auto;
  color: #000;
  display: flex;
  text-align: center;
`;

export const LeftSideBars = styled.div`
  flex-shrink: 1;
  width: 30%;
  background-color: #d9e4f5;
  background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
`;

export const RightSideBars = styled.div`
  width: 70%;
`;
