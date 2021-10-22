import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({
    fontSize: "30px",
    marginBottom: "10px"
  })}
`;

const Desc = styled.span`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
  ${mobile({
    fontSize: "14px",
    marginBottom: "10px"
  })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px;
  overflow: hidden;
  ${mobile({
    width: "80%"
  })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
