import React from "react";
import styled from "styled-components";
function Section() {
  return (
    <Wrapper>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touch less Delivery</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
    </Wrapper>
  );
}
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
`;
const RightButton = styled(LeftButton)``;
const ButtonGroup = styled.div``;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: orange;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
`;

export default Section;
