import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import photo2 from "../../images/rr.jpg";
import photo3 from "../../images/rrr.jpg";

export const Homes = () => {
  return (
    <>
      <ImageWrapper>
        <Image src={photo2} />
      </ImageWrapper>

      <Grid>
        <Row>
          <HousesWrapper>
            <Col>
              <H1Wrapper>Domki</H1Wrapper>
              <div>
                {" "}
                informacje na temat domków ile osób się zmiesci pokoje itd itd{" "}
              </div>{" "}
            </Col>
          </HousesWrapper>
        </Row>
        <Facilities>
          <H2Wrapper>Udogodnienia/zalety</H2Wrapper>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Ul>
                <Li>wfessfeefs</Li>
                <Li>wesfesffes</Li>
                <Li>wfesfes</Li>
                <Li>wfesefsfes</Li>
                <Li>efesfesfesw</Li>
                <Li>wfesfeefs</Li>
                <Li>wefsefsfe</Li>
              </Ul>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Ul>
                <Li>wfessfeefs</Li>
                <Li>wesfesffes</Li>
                <Li>wfesfes</Li>
                <Li>wfesefsfes</Li>
                <Li>efesfesfesw</Li>
                <Li>wfesfeefs</Li>
                <Li>wefsefsfe</Li>
              </Ul>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Ul>
                <Li>wfessfeefs</Li>
                <Li>wesfesffes</Li>
                <Li>wfesfes</Li>
                <Li>wfesefsfes</Li>
                <Li>efesfesfesw</Li>
                <Li>wfesfeefs</Li>
                <Li>wefsefsfe</Li>
              </Ul>
            </Col>
          </Row>
          <ImageContainer>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4}>
                <Firstimagecontainer>
                  <Col>
                    <ImageW src={photo3} />
                  </Col>
                  <Col></Col>
                </Firstimagecontainer>
              </Col>

              <Col xs={4} sm={4} md={4} lg={4}>
                <Firstimagecontainer>
                  <Col>
                    <ImageW src={photo3} />
                  </Col>
                  <Col></Col>
                </Firstimagecontainer>
              </Col>

              <Col xs={4} sm={4} md={4} lg={4}>
                <Firstimagecontainer>
                  <Col>
                    <ImageW src={photo3} />
                  </Col>
                  <Col></Col>
                </Firstimagecontainer>
              </Col>
            </Row>
          </ImageContainer>
          <ImageContainer>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4}>
                <Firstimagecontainer>
                  <Col>
                    {" "}
                    <ImageW src={photo3} />
                  </Col>
                  <Col></Col>
                </Firstimagecontainer>
              </Col>

              <Col xs={4} sm={4} md={4} lg={4}>
                <Firstimagecontainer>
                  <Col>
                    <ImageW src={photo3} />{" "}
                  </Col>
                  <Col></Col>
                </Firstimagecontainer>
              </Col>

              <Col xs={4} sm={4} md={4} lg={4}>
                <Firstimagecontainer>
                  <Col>
                    <ImageW src={photo3} />
                  </Col>
                  <Col></Col>
                </Firstimagecontainer>
              </Col>
            </Row>
          </ImageContainer>
        </Facilities>
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

  height: 150px;

  width: 100%;
`;
const H1Wrapper = styled.h1`
  color: #000000;
`;
const Facilities = styled.div`
  width: 100%;
  height: 350px;
`;
const Ul = styled.ul``;
const Li = styled.li`
  padding-top: 15px;
`;
const H2Wrapper = styled.h2`
  color: #000000;
`;
const ImageContainer = styled.div`
  height: 430px;

  width: 100%;
`;
const Firstimagecontainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  width: 100%;
`;
const ImageW = styled.img`
  height: 400px;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
