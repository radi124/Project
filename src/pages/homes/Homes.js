import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import photo2 from "../../images/src15.jpg";

export const Homes = () => {
  return (
    <>
      <ImageWrapper>
        <Image src={photo2} />
      </ImageWrapper>

      <Grid>
        <Container>
          <Row>
            <HousesWrapper>
              <Col>
                <H1Wrapper>Domki</H1Wrapper>
                <div>
                  {" "}
                  Wszystkie domy obejmują salon z sofą oraz w pełni wyposażoną
                  kuchnię. W łazience znajduje się wanna lub prysznic. Mieszczą
                  one również jadalnię i część wypoczynkową. Codziennie rano na
                  miejscu serwowane jest śniadanie w formie bufetu. Do
                  dyspozycji Gości jest taras. W okolicy panują dobre warunki do
                  uprawiania turystyki pieszej. Na miejscu można wypożyczyć
                  rowery.
                </div>{" "}
              </Col>
            </HousesWrapper>
          </Row>
          <Row>
            <Col>
              {" "}
              <H3Wrapper>UDOGODNIENIA</H3Wrapper>
            </Col>
          </Row>
          <Facilities>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4}>
                <ColWrapper>
                  <Ul>
                    <Li>ręczniki</Li>
                    <Li>prywatna łazienka</Li>
                    <Li>wanna lub prysznic</Li>
                    <Li>szafa lub garderoba</Li>
                    <Li>kominek</Li>
                    <Li>część wypoczynkowa</Li>
                    <Li>bar</Li>
                    <Li>restauracja</Li>
                    <Li>bar z przekąskami</Li>
                  </Ul>
                </ColWrapper>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <Ul>
                  <Li>taras</Li>
                  <Li>sprzęt do grilowania</Li>
                  <Li>meble ogrodowe</Li>
                  <Li>miejsce na piknik</Li>
                  <Li>miejsce do grilowania</Li>
                  <Li>plac zabaw</Li>
                  <Li>sala zabaw</Li>
                  <Li>
                    zwierzęta są akceptowane (Mogą obowiązywać dodatkowe opłaty)
                  </Li>
                  <Li>biblioteka</Li>
                </Ul>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <Ul>
                  <Li>bezpłatny parking</Li>
                  <Li>pokój gier</Li>
                  <Li>sklep na miejscu</Li>
                  <Li>sklep z upominkami</Li>
                  <Li>karaoke</Li>
                  <Li>ogrzewanie</Li>
                  <Li>pokoje rodzinne</Li>
                  <Li>całość dostępna dla wózków inwalidzkich</Li>
                  <Li>kaplica/świątynia</Li>
                </Ul>
              </Col>
            </Row>
          </Facilities>
        </Container>
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
const HousesWrapper = styled.div`
  display: flex;
  flex-direction: row;

  height: 300px;

  width: 100%;
`;
const H1Wrapper = styled.h1`
  color: rgb(236, 159, 14);
`;
const Facilities = styled.div`
  width: 100%;
  height: 550px;
`;
const Ul = styled.ul``;
const Li = styled.li`
  padding-top: 15px;
`;
const H3Wrapper = styled.h3`
  color: rgb(236, 159, 14);
  dispaly: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
`;

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
