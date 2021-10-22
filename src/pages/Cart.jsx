import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

  ${mobile({
    padding: "10px"
  })}
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({
    padding: "5px"
  })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 400;
  border: ${props => props.type === "filled" && "none"};
  background: ${props => (props.type === "filled" ? "black" : "transparent")};
  color: ${props => props.type === "filled" && "white"};
  ${mobile({
    fontSize: "10px",
    padding: "5px"
  })}
`;

const TopTexts = styled.div`
  ${mobile({
    display: "flex",
    flexDirection: "column"
  })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
  ${mobile({
    fontSize: "13px"
  })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  ${mobile({
    flexDirection: "column",
    padding: "20px 10px"
  })}
`;

const Info = styled.div`
  flex: 3;
  ${mobile({
    marginBottom: 20
  })}
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  height: fit-content;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column"
  })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({
    flexDirection: "column"
  })}
`;

const Image = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  ${mobile({
    width: "100%"
  })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.span`
  font-size: 24px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 400;
`;

const SummaryTitle = styled.h1`
  font-weight: 400;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${props => props.type === "total" && "700"};
  font-size: ${props => props.type === "total" && "25px"};
`;
const SummaryItemText = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background: black;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export default function Cart() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(1)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80" />
                <Details>
                  <ProductName>
                    <b>Product : </b>
                    Nike Shoes
                  </ProductName>
                  <ProductId>
                    <b>ID : </b>
                    57235712
                  </ProductId>
                  <ProductColor color="green" />
                  <ProductSize>
                    <b>Size : </b>
                    40.1
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 240</ProductPrice>
              </PriceDetail>
            </Product>
            <br />
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80" />
                <Details>
                  <ProductName>
                    <b>Product : </b>
                    Nike Shoes
                  </ProductName>
                  <ProductId>
                    <b>ID : </b>
                    57235712
                  </ProductId>
                  <ProductColor color="green" />
                  <ProductSize>
                    <b>Size : </b>
                    40.1
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 240</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sub Total</SummaryItemText>
              <SummaryItemText>$ 240</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemText>$ 12</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemText>$ -20</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemText>$ 232</SummaryItemText>
            </SummaryItem>
            <SummaryButton>Checkout Now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}
