import styled from "styled-components";

const Container = styled.div({
  height: 30,
  backgroundColor: "teal",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 14,
  fontWeight: 500
});

function Announcement() {
  return <Container>Super Deal! Right Now! Buy 1 GET 2</Container>;
}

export default Announcement;
