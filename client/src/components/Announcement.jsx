import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  align-items: center;
  display: flex;
  text-align: center;
  background-color: teal;
  color: white;
  justify-content: center;
  font-weight: 500px;
  font-size: 14px;
`;

function Announcement() {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
}

export default Announcement;
