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
              <H2Wrapper>UDOGODNIENIA</H2Wrapper>
            </Col>
          </Row>
          <Facilities>
            <Row>
              <Col xs={6} sm={6} md={6} lg={6}>
                <ColWrapper>
                  <Ul>
                    <Li>ręczniki</Li>
                    <Li>prywatna łazienka</Li>
                    <Li>wanna lub prysznic</Li>
                    <Li>szafa lub garderoba</Li>
                    <Li>bezpłatny parking</Li>
                    <Li>część wypoczynkowa</Li>
                    <Li>bar</Li>
                    <Li>restauracja</Li>
                    <Li>bar z przekąskami</Li>
                    <Li>bezpłatny parking</Li>
                    <Li>pokój gier</Li>
                    <Li>sklep na miejscu</Li>
                    <Li>sklep z upominkami</Li>
                    <Li>biblioteka</Li>
                  </Ul>
                </ColWrapper>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Ul>
                  <Li>sprzęt do grilowania</Li>
                  <Li>meble ogrodowe</Li>
                  <Li>miejsce na piknik</Li>
                  <Li>miejsce do grilowania</Li>
                  <Li>plac zabaw</Li>
                  <Li>sala zabaw</Li>
                  <Li>kaplica/świątynia</Li>
                  <Li>karaoke</Li>
                  <Li>ogrzewanie</Li>
                  <Li>pokoje rodzinne</Li>
                  <Li>całość dostępna dla wózków inwalidzkich</Li>
                  <Li>
                    zwierzęta są akceptowane (Mogą obowiązywać dodatkowe opłaty)
                  </Li>
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

  width: 100%;
`;
const H1Wrapper = styled.h1`
  color: rgb(236, 159, 14);
  margin-top: 30px;
`;
const Facilities = styled.div`
  width: 100%;
`;
const Ul = styled.ul`
  position: relative;
`;
const Li = styled.li`
  padding-top: 15px;
`;
const H2Wrapper = styled.h2`
  color: rgb(236, 159, 14);
  dispaly: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Container = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 1.4;
`;

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
