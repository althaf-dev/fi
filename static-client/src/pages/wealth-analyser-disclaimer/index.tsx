import React from "react";
import {
    Container,
    Title,
    List,
    ListItem
} from "../../containers/WealthDisclaimer/styles";

const WealthAnalyserDisclaimer: React.FC = () => {
  return (
    <Container>
      <Title>Disclaimer</Title>
      <List>
        <ListItem>
          The information provided in these reports is for informational
          purposes only and should not be considered as financial/investment
          advice. These reports contain insights based on certain assumptions
          and available data, which may not be complete or entirely accurate,
          and should not be interpreted as guarantees of future performance.
          Please consult a licensed financial advisor for personalized advice
          tailored to your specific financial needs.
        </ListItem>
        <ListItem>
          We do not make any warranty, express or implied, or assume any
          legal/consequential liability, or take any responsibility for the
          authenticity, and completeness of the data presented in this report.
        </ListItem>
        <ListItem>
          In the preparation of this report, we relied on our vendors for
          certain data which may be incorrect or incomplete and may render the
          report inaccurate. Further, due to rounding off of transaction
          amounts, the exact value of amounts could be slightly different.
        </ListItem>
        <ListItem>
          This report is based on our interpretation of the current laws,
          wherever relevant, and the interpretation of the
          regulatory/governmental authorities may be different.
        </ListItem>
      </List>
    </Container>
  );
};

export default WealthAnalyserDisclaimer;
