import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Grid, Row, Col } from "react-flexbox-grid";
import { photos } from "./photos.js";
import styled from "styled-components";
import photo1 from "./images/page1.jpg";

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
      <ImageWrapper>
        <Image src={photo1} />
      </ImageWrapper>
      <Grid>
        <div>
          <H2Wrapper>GALERIA</H2Wrapper>
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
        </div>
      </Grid>
    </>
  );
};
const H2Wrapper = styled.h2`
  color: rgb(255, 255, 255);
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;
const Image = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
`;
const ImageWrapper = styled.div``;
