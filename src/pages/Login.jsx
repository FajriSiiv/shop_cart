import React from "react";
import styled from "styled-components";

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

const Link = styled.a`
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
  text-transform: uppercase;
`;

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" type="password" />
          <Button>Login</Button>
          <Link>Forgot password?</Link>
          <Link>Create new accout</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
