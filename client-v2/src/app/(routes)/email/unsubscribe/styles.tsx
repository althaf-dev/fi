'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const MainContainer = styled.div`
  background: #28292b;
  color: white;
  font-family: 'Gilroy', sans-serif;
  min-height: 100vh;
`;

export const FiLogo = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  display: block;
  object-fit: contain;
`;

export const StateImage = styled(Image)`
  top: 167px;
  left: 98px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  object-fit: contain;
`;

export const InfoContainer = styled.div`
  margin: 30vh 15vw 15vw 15vw;
  text-align: center;
`;

export const PreferencesPanel = styled.div`
  display: block;
  margin: 20px 12vw 5vw 12vw;
`;

export const ToggleInput = styled.input`
    
`;

export const Outline = styled.div`
  border: solid #57595D;
  border-width: 1px;
  border-radius: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const UnsubscribeButton = styled.button`
  width: 128px;
  height: 35px;
  border-radius: 7px;
  background-color: #28292b;
  border: 1px solid #00B899;
  color: #00B899;
  font-family: Gilroy, 'sans-serif';
  font-size: 10px;
`;

export const SavePreferencesButton = styled.button`
  width: 128px;
  height: 35px;
  border-radius: 7px;
  background-color: #00B899;
  border: none;
  color: white;
  font-family: Gilroy, 'sans-serif';
  font-size: 10px;
  margin-left: 20px;
`;
