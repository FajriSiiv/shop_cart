import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #3d5a80;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 0 20px;
  background-color: white;
  border-radius: 7px;
  ${mobile({
    width: "90%"
  })}
`;

const Title = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  min-width: 50%;
  margin: 20px 10px 0 0;
  padding: 10px;
  font-size: 18px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px;
  background: teal;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 18px;
`;

const LinkText = styled.a`
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
  text-transform: uppercase;
`;
const Back = styled.a`
  text-decoration: none;
  padding: 8px 15px;
  color: black;
  background: teal;
  position: absolute;
  top: 20px;
  left: 20px;
`;

export default function Login() {
  return (
    <Container>
      <Back>
        <Link to="/">Home</Link>
      </Back>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" type="password" />
          <Button>Login</Button>
          <LinkText>Forgot password?</LinkText>
          <LinkText>Create new accout</LinkText>
        </Form>
      </Wrapper>
    </Container>
  );
}
