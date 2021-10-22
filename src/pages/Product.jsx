import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Remove, Add } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  background: #fcf5f5;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding: "20px 8px",
    flexDirection: "column"
  })}
`;

const ImgContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({
    padding: "0px"
  })}
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    height: "200px"
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({
    padding: "20px 8px"
  })}
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-top: 30px;
  ${mobile({
    flexDirection: "column"
  })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    margin: "10px 0"
  })}
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-right: 10px;
  margin-bottom: 20px;
  ${mobile({
    margin: "0px 10px"
  })}
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: space-between;
  ${mobile({
    width: "100%"
  })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

const Button = styled.button`
  padding: 8px 15px;
  border: 1px solid teal;
  background: white;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  &:hover {
    background-color: #a8dadc;
  }
`;

export const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
        </ImgContainer>
        <InfoContainer>
          <Title>Nike Shoes</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veritatis nostrum
            facere saepe alias possimus obcaecati enim modi sint unde, sed molestias, ullam dolores
            iure. Qui voluptates libero aperiam, fugit obcaecati fugiat doloremque illum ipsam
            maiores, nisi consectetur quaerat vel quos consequuntur neque magnam doloribus ratione
            dolores facilis dolorum. Commodi.
          </Desc>
          <Price>$ 230</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="white" />
              <FilterColor color="red" />
              <FilterColor color="blue" />
              <FilterColor color="green" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to Card</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};
