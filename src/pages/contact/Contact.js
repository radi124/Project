import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import img1 from "./images/img1.webp";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export const Contact = () => {
  return (
    <>
      <ImageWrapper>
        <Image src={img1} />
      </ImageWrapper>

      <Grid>
        <Row center="xs">
          <Col xs={6} sm={4} md={4} lg={4}>
            <ElementWrapper>
              <H2Wrapper>NASZ ADRES</H2Wrapper>
              Myczkowce 82
              <br />
              38-623 Solina
            </ElementWrapper>
          </Col>
          <Col xs={6} sm={4} md={4} lg={4}>
            <ElementWrapper>
              <H2Wrapper>KONTAKT</H2Wrapper>
              telefon: 609 470 676
              <br />
              email:
            </ElementWrapper>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4}>
            <ElementWrapper>
              <H2Wrapper>REZERWACJA MIEJSC</H2Wrapper>
              <a
                href="https://www.booking.com/hotel/pl/myczkowce-sadyba.pl.html?label=gen173nr-1FCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEP2AEB6AEB-AELiAIBqAIDuAKYk5X9BcACAdICJDhmMTE1OGQ1LTUwODktNDUxMy04OGNjLTExNDVmODBiZTRmM9gCBuACAQ;sid=8cbc453a049553240d842fb4b431525f;dest_id=-533901;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1605024105;srpvid=d5b270b49b0300f9;type=total;ucfs=1&#tab-main"
                target="_blank"
              >
                <ButtonContact>Zarezerwuj już teraz</ButtonContact>
              </a>
            </ElementWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2584.2538108892363!2d20.677571515657647!3d49.63067077937066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1606342013657!5m2!1spl!2spl"
              width="800"
              height="600"
              frameBorder="0"
              style="border:0;"
              allowFullScreen=""
              ariaHidden="false"
              tabIndex="0"
            ></iframe>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

const Image = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
`;
const ImageWrapper = styled.div``;
const H2Wrapper = styled.h2`
  color: rgb(236, 159, 14);
  flex-direction: column;
  display: flex;
  margin-top: 40px;
`;
const ULWrapper = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
`;
const ButtonContact = styled.button`
padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  background-color: rgb(236, 159, 14);
  text-transform: uppercase;
  font-weight:bold;
  
  a {
    color: #ffff;
    text-decoration: none;
  }
  margin-bottom:40px;
  1.1px -0.9px 0px #848484;
  border: none;
  :hover {
    box-shadow: 0 0px 2px  #848484, 0 0px 2px  #848484;
  }
`;
const ElementWrapper = styled.div`
  flex-direction: column;
  display: flex;
  padding: 10px 30px 10px 30px;
`;
