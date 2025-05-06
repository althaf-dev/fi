/**
 *  @file MobileGalleryLayout
 *  This component that renders an image in the gallery layout.
 */
import * as React from "react";
import styled from "styled-components";
import { MAX_WIDTH_MEDIA_SCREENS } from "../../../Themes/Device";

interface GalleryImageProps {
  src: string;
  alt: string;
}

export const MobileGalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
  return <StyledImage loading="lazy" src={src} alt={alt} />;
};

const StyledImage = styled.img`
  aspect-ratio: 1.09;
  object-fit: contain;
  object-position: center;
  border-radius: 20px;
  min-width: 240px;
  flex: 1;
  flex-basis: 0%;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    flex: 0;
    min-width: 350px;
  }
`;
