import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
const Container = styled.div({
  height: 60
});

const Wrapper = styled.div({
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

const Left = styled.div({
  flex: 1,
  display: "flex",
  alignItems: "center"
});

const Language = styled.span({
  fontSize: 14,
  cursor: "pointer"
});

const SearchContainer = styled.div({
  border: "0.5px solid lightgray",
  display: "flex",
  alignItems: "center",
  marginLeft: 25,
  padding: 5
});

const Input = styled.input({
  border: "none",
  background: "transparent",
  ":focus": {
    border: "none",
    outline: "none"
  }
});

const Center = styled.div({
  flex: 1
});

const Logo = styled.h1({
  fontWeight: "bold",
  textAlign: "center"
});

const Right = styled.div({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end"
});

const MenuItem = styled.div({
  fontSize: 14,
  cursor: "pointer",
  marginLeft: 25
});

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search styled={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>SIIV</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
