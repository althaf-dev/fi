/**
 * @file MobileLayout
 *
 * This component is for the images showing the features of the loan template in the mobile view
 */
import * as React from "react";
import styled from "styled-components";
import { MobileGalleryImage } from "./MobileGalleryImage";
import { MAX_WIDTH_MEDIA_SCREENS } from "../../../Themes/Device";

interface GalleryLayoutProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

/*
 * This contains images for the features of the loan template mobile view
 */
export const MobileLayout: React.FC<GalleryLayoutProps> = ({ images }) => {
  return (
    <main>
      <MobileGalleryContainer>
        {images.map((image, index) => (
          <MobileGalleryImage key={index} {...image} />
        ))}
      </MobileGalleryContainer>
    </main>
  );
};

const MobileGalleryContainer = styled.section`
  display: none;
  gap: 35px;
  margin-top: 100px;
  justify-content: start;
  flex-wrap: wrap;
  aspect-ratio: 3.47;
  width: auto;
  height: 300px;
  padding: 0 100px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    display: flex;
    justify-content: center;
  }
`;
