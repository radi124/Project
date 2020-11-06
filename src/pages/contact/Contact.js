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
              <H2Wrapper>KONTAKT</H2Wrapper>
              <ULWrapper>
                <ul>
                  <li>609 470 676</li>
                </ul>
                <ul>
                  <li></li>
                </ul>
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
