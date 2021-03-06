import styled from "styled-components";
import React from "react";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #cddafd;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({
    padding: "20px 7px",
    height: "fit-content"
  })}
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 0 20px;
  background-color: white;
  border-radius: 7px;
  ${mobile({
    width: "100%",
    marginTop: 50
  })}
`;

const Title = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({
    flexDirection: "column"
  })}
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  font-size: 18px;
  ${mobile({
    margin: "10px 0"
  })}
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px;
  background: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 18px;
  ${mobile({
    width: "100%"
  })}
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

const Register = () => {
  return (
    <Container>
      <Back>
        <Link to="/">Home</Link>
      </Back>
      <Wrapper>
        <Title>Create your account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" type="password" />
          <Input placeholder="confirm password" type="password" />
          <Agreement>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, tempora?
            <b>Privacy Policy</b>
          </Agreement>
          <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
