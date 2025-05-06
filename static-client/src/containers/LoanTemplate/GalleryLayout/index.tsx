/**
* @file GalleryLayout
*
* This file contains the gallery layout for the loan template 
* which has images showing the features of the loan template in the desktop view
*/ 
import * as React from "react";
import styled from "styled-components";
import { GalleryImage } from "./GalleryImage";
import { MAX_WIDTH_MEDIA_SCREENS } from "../../../Themes/Device";

interface GalleryLayoutProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}


export const GalleryLayout: React.FC<GalleryLayoutProps> = ({ images }) => {
  return (
    <main>
      <GalleryContainer>
        {images.map((image, index) => (
          <GalleryImage key={index} {...image} />
        ))}
      </GalleryContainer>
    </main>
  );
};

const GalleryContainer = styled.section`
  display: flex;
  gap: 35px;
  margin-top: 100px;
  justify-content: center;
  aspect-ratio: 3.47;
  width: auto;
  height: 340px;
  padding: 0 100px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    display: none;
    justify-content: center;
  }
`;
