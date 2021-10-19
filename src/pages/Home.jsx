import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Container = styled.div({
  maxWidth: "1440px",
  position: "relative",
  margin: "auto"
});

export default function Home() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}
