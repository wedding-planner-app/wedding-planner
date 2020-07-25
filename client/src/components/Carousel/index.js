import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from 'mdbreact';

import weddings from './imgs/weddings-modified.jpg';
import bride from './imgs/bride-modified.jpg';
import heart from './imgs/heart-modified.jpg';

const CarouselPage = () => {
  return (
    // <MDBContainer className="mb-5 pb-5 container-style">
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={weddings}
              alt="first image"
            />
            <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Weddings</h3>
            <p>All in one place</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={bride}
              alt="second image"
            />
            <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={heart}
              alt="thrid image"
            />
            <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive text-dark">
              Wedding Planner
            </h3>
            <p className="text-dark">Plan your dream wedding</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    // </MDBContainer>
  );
};

export default CarouselPage;
