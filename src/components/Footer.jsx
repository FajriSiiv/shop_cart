import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  Room,
  MailOutline,
  Payment,
  Phone
} from "@material-ui/icons";
const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${props => props.color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: default;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>SIIV.</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae aspernatur totam
          reiciendis, corporis nihil accusamus, qui dolorum ex cum, placeat iusto sapiente facere
          ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolore!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Term</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <Room style={{ marginRight: 10 }} /> Kemayoran,Jakarta Pusat 3123
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: 10 }} /> +621234567 33
        </ContactItem>
        <ContactItem>
          {" "}
          <MailOutline style={{ marginRight: 10 }} /> contact@anyemail.com
        </ContactItem>
        <ContactItem>
          {" "}
          <Payment style={{ marginRight: 10 }} /> email@asdasd.com
        </ContactItem>
      </Right>
    </Container>
  );
}
