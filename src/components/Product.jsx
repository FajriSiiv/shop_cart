import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@material-ui/icons";

const Info = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 2;
  transition: 0.5s all ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
    transition: all 0.5s ease;
  }
  &:hover ${Image} {
    transform: scale(1.2);
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background: #e9f5f5;
    transform: scale(1.1);
  }
`;

export default function Product({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}
