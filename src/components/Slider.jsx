import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { slideItems } from "../data";
const Container = styled.div(props => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  position: "relative",
  // justifyContent: "center"
  overflow: "hidden"
}));

const Arrow = styled.div(props => ({
  width: 50,
  height: 50,
  backgroundColor: "#fff7f7",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: 0,
  top: 0,
  left: props.direction === "left" && 10,
  right: props.direction === "right" && 10,
  margin: "auto",
  cursor: "pointer",
  opacity: "0.5",
  zIndex: 2
}));

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: 1.5s all ease;
`;
const Slide = styled.div(props => ({
  display: "flex",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  background: props.bg
}));

const Image = styled.img({
  height: "80%"
});

const ImgContainer = styled.div({
  height: "100%",
  flex: 1,
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const InfoContainer = styled.div({
  flex: 1,
  padding: "0 50px"
});

const Title = styled.h1({
  fontSize: 70
});
const Desc = styled.p({
  margin: "50px 0px",
  fontSize: 20,
  fontWeight: 500,
  letterSpacing: 3
});
const Button = styled.button({
  padding: 10,
  fontSize: 20,
  backgroundColor: "transparent",
  cursor: "pointer"
});

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = direction => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Show Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
