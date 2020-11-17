import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import photo1 from "../../images/src9.jpg";
import photo2 from "../../images/src12.jpg";

import photo4 from "../../images/sadyba.jpg";

export const Main = (props) => {
  return (
    <>
      <ImageWrapper>
        <Image src={photo4} />
      </ImageWrapper>
      <Grid>
        <Row center="xs">
          <Col
            xs={12}
            id="S2Container"
            md={10}
            mdofset={1}
            sm={10}
            smofset={1}
            lg={8}
            lgofset={2}
          >
            <H1Wrapper> {props.Drugazakładka}</H1Wrapper>
          </Col>

          <Col>
            <FirstTextWrapper>
              Obiekt MYCZKOWCE SADYBA położony jest w miejscowości Uherce
              Mineralne. Wszystkie domy obejmują salon z sofą oraz w pełni
              wyposażoną kuchnię. W łazience znajduje się wanna lub prysznic.
              Obiekt MYCZKOWCE SADYBA jest oddalony o 13 km od Polańczyka i o 38
              km od Arłamowa. Obiekt MYCZKOWCE SADYBA położony jest w
              miejscowości Uherce Mineralne. Wszystkie domy obejmują salon z
              sofą oraz w pełni wyposażoną kuchnię. W łazience znajduje się
              wanna lub prysznic. Obiekt MYCZKOWCE SADYBA jest oddalony o 13 km
              od Polańczyka i o 38 km od Arłamowa. Obiekt MYCZKOWCE SADYBA
              położony jest w miejscowości Uherce Mineralne. Wszystkie domy
              obejmują salon z sofą oraz w pełni wyposażoną kuchnię. W łazience
              znajduje się wanna lub prysznic. Obiekt MYCZKOWCE SADYBA jest
              oddalony o 13 km od Polańczyka i o 38 km od Arłamowa.
            </FirstTextWrapper>

            <InfoButtonWrapper>
              <InfoButton>
                {" "}
                <a href="../Restauracja"> więcej</a>
              </InfoButton>
            </InfoButtonWrapper>
          </Col>
        </Row>
        <Restauracja>
          <Row center="xs">
            <Col xs={12} sm={12} md={4} lg={5}>
              <PhotoColumn src={photo1} />
            </Col>
            <Col xs={12} sm={12} md={8} lg={7}>
              <RestauracjaWrapper>
                <H1Wrapper>
                  <a>Restauracja</a>
                </H1Wrapper>
                <TextWrapper>
                  Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
                  Suspendisse a pellentesque dui, non felis. Maecenas malesuada
                  elit lectus felis, malesuada ultricies. Curabitur et ligula.
                  Ut molestie a, ultricies
                  <div>
                    porta urna. Vestibulum commodo volutpat a, Lorem ipsum dolor
                    sit amet enim. Etiam ullamcorper. Slutpat a,
                  </div>
                </TextWrapper>
                <InfoButtonWrapper>
                  <InfoButton>
                    <a href="../Restauracja">więcej</a>
                  </InfoButton>
                </InfoButtonWrapper>
              </RestauracjaWrapper>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={6} id="S2Container"></Col>
          </Row>
        </Restauracja>
        <Domki>
          <Row center="xs">
            <Col xs={12} sm={12} md={8} lg={7}>
              <H1Wrapper>
                <a>Domki</a>
              </H1Wrapper>
              <TextWrapper>
                Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse
                a pellentesque dui, non felis. Maecenas malesuada elit lectus
                felis, malesuada ultricies. Curabitur et ligula. Ut molestie a,
                ultricies
                <div>
                  porta urna. Vestibulum commodo volutpat a, Lorem ipsum dolor
                  sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque
                  dui, non felis urna. Vestibulum commodo volutpat a,
                </div>
              </TextWrapper>
              <InfoButtonWrapper>
                <InfoButton>
                  <a href="../Domki"> więcej</a>
                </InfoButton>
              </InfoButtonWrapper>
            </Col>
            <Col xs={12} sm={12} md={4} lg={5}>
              <PhotoColumn src={photo2} />
            </Col>
          </Row>
        </Domki>
      </Grid>
    </>
  );
};

const PhotoColumn = (props) => {
  return (
    <>
      <PhotoWrapper>
        <Photo src={props.src} />
      </PhotoWrapper>
    </>
  );
};

const Photo = styled.img`
  width: 100%;
  height: 230px;
  margin-top: 14px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 0px 6px rgba (119 119 119 0.26),
    0 0px 6px rgba (119 119 119 0.26);
  transition: 0.5s;

  :hover {
    box-shadow: 0 0px 12px rgba (119 119 119 0.26),
      0 0px 12px rgba (119 119 119 0.26);
    cursor: pointer;
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
`;
const ImageWrapper = styled.div``;
const InfoButton = styled.button`
  padding:10px 16px;
  border-radius: 10px;
  font-weight:bold;
  font-size:14px;
  cursor: pointer;
  color: white;
  background-color: rgb(236, 159, 14);
  text-transform: uppercase;
  a {
    color: #ffff;
    text-decoration: none;
  }
  
  1.1px -0.9px 0px #848484;
  border: none;
  :hover {
    box-shadow: 0 0px 2px  #848484, 0 0px 2px  #848484;
`;
const H1Wrapper = styled.h1`
  color: #ffff;
  a {
    color: #ffff;
    text-decoration: none;
  }
`;
const Domki = styled.div`
  margin-bottom: 40px;
  margin-top: 60px;
`;
const Restauracja = styled.div`
  margin-top: 40px;
`;
const InfoButtonWrapper = styled.div`
  padding-top: 20px;
`;
const TextWrapper = styled.div`
  text-align: left;
  margin: 0px 15px 0px 15px;
`;
const RestauracjaWrapper = styled.div``;

const FirstTextWrapper = styled.div`
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
`;
