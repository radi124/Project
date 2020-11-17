import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import img1 from "./images/img1.webp";
// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;

export const Contact = () => {
  return (
    <>
      <ImageWrapper>
        <Image src={img1} />
      </ImageWrapper>
      <Container>
        <Grid>
          <Row>
            <Col>
              <ULWrapper>
                <H2Wrapper>NASZ ADRES</H2Wrapper>
                {/* <H3Wrapper>Myczkowce Sadyba</H3Wrapper> */}
                Myczkowce 82
                <br />
                38-623 Solina
                <H2Wrapper>KONTAKT</H2Wrapper>
                telefon: 609 470 676
                <br />
                email:
                <H2Wrapper>REZERWACJA MIEJSC</H2Wrapper>
                <a
                  href="https://www.booking.com/hotel/pl/myczkowce-sadyba.pl.html?label=gen173nr-1FCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEP2AEB6AEB-AELiAIBqAIDuAKYk5X9BcACAdICJDhmMTE1OGQ1LTUwODktNDUxMy04OGNjLTExNDVmODBiZTRmM9gCBuACAQ;sid=8cbc453a049553240d842fb4b431525f;dest_id=-533901;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1605024105;srpvid=d5b270b49b0300f9;type=total;ucfs=1&#tab-main"
                  target="_blank"
                >
                  <ButtonContact>Zarezerwuj już teraz</ButtonContact>
                </a>
              </ULWrapper>
            </Col>
          </Row>
        </Grid>
      </Container>
    </>
  );
};

const Container = styled.div``;
const Image = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
`;
const ImageWrapper = styled.div``;
const H2Wrapper = styled.h2`
  color: rgb(236, 159, 14);
`;
const ULWrapper = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const H3Wrapper = styled.h3`
  color: rgb(255, 255, 255);
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
