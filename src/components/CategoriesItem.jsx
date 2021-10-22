import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  color: #4a4e69;
  background: white;
  padding: 10px;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  background: white;
  color: gray;
  font-weight: 600;
  cursor: pointer;
`;

export default function CategoriesItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Link to="/list">
          <Title> {item.title} </Title>
          <Button>Shop Now</Button>
        </Link>
      </Info>
    </Container>
  );
}
