import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Grid, Row, Col } from "react-flexbox-grid";
import { photos } from "./photos.js";
import styled from "styled-components";

export const Galery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Grid>
        <Row center="xs">
          <Col xs={12}>
            <H1Wrapper>GALERIA</H1Wrapper>
          </Col>
        </Row>
        <GalleryWrapper>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </GalleryWrapper>
      </Grid>
    </>
  );
};
const H1Wrapper = styled.h1`
  color: rgb(255, 255, 255);
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 130px;
`;

const GalleryWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
`;
