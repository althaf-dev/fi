import React, {useState} from "react";
import { alphabet } from "../../../utils/stocks-directory";
import { StyledList, Letter, Separator } from "./styles";

interface AlphabetListProps {}

const AlphabetList: React.FC<AlphabetListProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleClick = (index: number, letter: string) => {
    setActiveIndex(index);
    const element = document.getElementById(letter);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <StyledList>
      {alphabet.map((letter, index) => (
        <React.Fragment key={letter}>
          <Letter active={index === activeIndex} onClick={()=> handleClick(index, letter)}>{letter}</Letter>
          {index < alphabet.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </StyledList>
  );
};

export default AlphabetList;
