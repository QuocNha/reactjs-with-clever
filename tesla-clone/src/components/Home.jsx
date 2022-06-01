import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  const renderSection = <Section />;
  return <Container>{renderSection}</Container>;
}
const Container = styled.div`
  height: 100vh;
`;

export default Home;
