import React, { useState, useEffect, useRef } from 'react';
import { 
  PageBackground, 
  SearchBarContainer, 
  SearchForm, 
  SearchIcon, 
  SearchInput,
  AnimationContainer 
} from './styles';
import { animationData } from './animationData';

interface AnimatedSearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

interface LottieAnimationData {
  ddd: number;
  h: number;
  w: number;
  layers: any[];
  [key: string]: any;
}

const AnimatedSearchBar: React.FC<AnimatedSearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMounted || !animationContainer.current) return;

    const initializeLottie = async () => {
      const Lottie = (await import('lottie-web')).default;
      
      const modifiedAnimationData: LottieAnimationData = JSON.parse(JSON.stringify(animationData));

      modifiedAnimationData.layers.forEach(layer => {
        if (layer.ty === 5 && layer.t?.d?.k?.[0]?.s?.t) {
          if (windowWidth < 768) {
            if (layer.t.d.k[0].s.t === "United States of America\r") {
              layer.t.d.k[0].s.t = "USA\r";
            }
          }
        }
      });

      const anim = Lottie.loadAnimation({
        container: animationContainer.current!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: modifiedAnimationData
      });

      return () => anim.destroy();
    };

    const cleanup = initializeLottie();
    return () => {
      cleanup.then(cleanupFn => cleanupFn());
    };
  }, [isMounted, windowWidth]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <PageBackground>
      <SearchBarContainer>
        <SearchForm onSubmit={handleSubmit}>
          <SearchIcon
            src="https://epifi-icons.pointz.in/web/new_search.png"
            alt="Search"
            loading="lazy"
            aria-hidden="true"
          />
          <SearchInput
            ref={inputRef}
            type="search"
            aria-label="Search for countries"
            placeholder="Check limits in"
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            style={{
              fontWeight: 600,
              fontFamily: 'Gilroy-SemiBold, sans-serif',
              paddingLeft: '40px',
            }}
          />
          <AnimationContainer
            as="div"
            ref={animationContainer}
            $isVisible={!searchTerm}
          />
        </SearchForm>
      </SearchBarContainer>
    </PageBackground>
  );
};

export { AnimatedSearchBar };