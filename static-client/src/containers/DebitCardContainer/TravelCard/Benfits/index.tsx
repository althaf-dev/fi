import React from "react";
import { BenefitsColumn } from "./styles";
import BenefitsToggle from "./BenefitsToggle";
import BenefitsList from "./BenefitsList";

const Benefits = ({ isInternational, setIsInternational }: { isInternational: boolean, setIsInternational: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <BenefitsColumn>
            <BenefitsToggle isInternational={isInternational} setIsInternational={setIsInternational} />
            <BenefitsList isInternational={isInternational} />
        </BenefitsColumn>
    )
}

export default Benefits;
