import { Device } from '@/Themes/Device';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: grey;
  z-index: 1;

  @media ${Device.desktop}{
    height: 10px;
  }
`;

const Progress = styled.div<{scrollProgress: number}>`
  height: 100%;
  background-color: ${(props) => props.theme.color.FOREST_GREEN};
  width: ${props => props.scrollProgress}%;
  transition: width 0.3s ease;
`;

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ProgressBarContainer>
      <Progress scrollProgress={scrollProgress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
