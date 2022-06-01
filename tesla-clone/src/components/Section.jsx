import React from "react";
import styled from "styled-components";
function Section() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: orange;
  background-size: cover;
  background-position: center;
  background-image: url("/images/model-s.jpg");
`;

export default Section;
