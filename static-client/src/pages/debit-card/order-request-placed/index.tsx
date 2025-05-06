import React from 'react';
import { Container, Title, Text, Footer } from '../../../containers/DebitCardContainer/RedirectionLandingPage/styles';

const LandingPage = () => {
  return (
    <Container>
      <Title>Request Successfully Placed</Title>
      <Text>Your request for the physical Debit Card has been successfully placed.</Text>
      <Text>
        We’ll update you once the order is confirmed (usually in the next 8-12 hours) & the delivery process begins. 
        Please don’t place another order on the Fi app in the meantime.
      </Text>
      <Footer>- Fi</Footer>
    </Container>
  );
};

export default LandingPage;
