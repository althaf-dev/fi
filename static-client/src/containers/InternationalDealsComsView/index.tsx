import React from "react";
import { Hero } from "./Hero";
import { OfferSection } from "./OfferSection";
import { TravelDeals } from "./TravelDeals";
import { ReadyToSave } from "./ReadyToSave";
import SecurityPartners from "../DebitCardContainer/SecurityPartners";
import ResearchHelp from "../DebitCardContainer/ResearchHelp";
import {
  InternationalTravelOffersWrapper,
  ResearchHelper,
  SecurityContainer,
} from "./styles";

interface BlogData {
  title: string;
  category: string;
  categorySlug: string;
  readingDuration: string;
  slug: string;
  headerImage: string;
}

interface InternationalTravelProps {
  blogsData: Array<BlogData>;
}

const InternationalTravelOffers: React.FC<InternationalTravelProps> = ({
  blogsData,
}) => {
  return (
    <InternationalTravelOffersWrapper>
      <Hero />
      <OfferSection />
      <TravelDeals />
      <ReadyToSave />
      <ResearchHelper>
        <ResearchHelp blogsData={blogsData} />
      </ResearchHelper>
      <SecurityContainer>
        <SecurityPartners />
      </SecurityContainer>
    </InternationalTravelOffersWrapper>
  );
};

export default InternationalTravelOffers;
