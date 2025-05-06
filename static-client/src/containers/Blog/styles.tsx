import { styled } from "styled-components";
import Image from 'next/image';

import { Device, MAX_WIDTH_MEDIA_SCREENS } from "@/Themes/Device";
import MIXINS from "@/Themes/mixins";
import Colors from "@/Themes/Colors";

const Poster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px 50px;
  position: relative;
  width: 360px;
  margin: 0 auto;

  @media ${Device.tab} {
    width: 550px;
  }

  @media ${Device.desktop} {
    height: 70%;
    width: 827px;
    margin: 0 auto;
    padding-left: 0;
  }
`;

const Header = styled.div`
  background: ${(props) => props.theme.color.SHARK2};
`;

const BlogContainer = styled.div`
    background: ${(props) => props.theme.color.IVORY};
    color: ${(props) => props.theme.color.SHARK2};
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 700,
      size: "20px",
      lineHeight: "32px",
    })};
    width: 300px;
    margin: 0 auto;
    margin-top: 24px;
    margin-bottom: 30px;

    @media ${Device.tab}{
      width: 550px;
    }

    @media ${Device.desktop}{
    width: 827px;
    margin: 90px;
    margin-top: 0;
    }
`;

const Title = styled.h1`
  ${MIXINS.FontMixin({
    font: "Gilroy",
    weight: 700,
    size: "36px",
    lineHeight: "42px",
  })};
  text-align: start;
  color: ${(props) => props.theme.color.WHITE};

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 700,
      size: "52px",
      lineHeight: "54.6px",
    })};
    text-align: start;
    margin-top: 90px;
    padding: 0;
  }
`;

/*
* H1SEO
* This tag is used only for the SEO purpose. It is hidden from the user.
*/ 
const H1SEO = styled.h1`
  ${MIXINS.FontMixin({
    font: "Gilroy",
    weight: 700,
    size: "36px",
    lineHeight: "42px",
  })};
  display: none;
  text-align: center;
  color: ${(props) => props.theme.color.WHITE};

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 700,
      size: "52px",
      lineHeight: "54.6px",
    })};
    text-align: start;
    margin-top: 90px;
    padding: 0;
  }
`;

const LineBreak = styled.div`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.color.GREY};
  margin: 16px 0;

  @media ${Device.desktop} {
    width: 827px;
    margin: 25px 0;
    background: ${(props) => props.theme.color.BOMBAY_GREY};
    height: 1px;
  }
`;

const PosterImage = styled.img`
  height: 220px;
  width: 300px;
  margin-top: 15px;
  align-self: start;
  border-radius: 32px;

  @media ${Device.tab} {
    width: 400px;
    height: 300px;
  }

  @media ${Device.desktop} {
    height: 442px;
    width: 827px;
    align-self: center;
    z-index: 0;
    border-radius: 24px;
    margin-top: 0;
    };
  }
`;

const PosterImageDesktop = styled.img`
  max-width: 827px;
  max-height: 442px;
  width: 100%; /* Optional for responsiveness */
  height: auto;
  margin-top: 0;
  align-self: center; /* Works only in a flexbox container */
  border-radius: 24px;
  object-fit: contain; 

  @media ${MAX_WIDTH_MEDIA_SCREENS.tab} {
    display: none;
  }
`

const PosterImageMobile = styled.img`
  display: none;
  max-width: 312px;
  max-height: 220px;
  height: auto;
  margin: 0 auto;
  margin-top: 15px;
  align-self: start;
  border-radius: 32px;
  object-fit: contain;

  @media ${MAX_WIDTH_MEDIA_SCREENS.tab} {
    display: inline-block;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  padding: 45px 0;
  top: 10px;
  position: relative;
  margin: 0 auto;

  @media ${Device.tab} {
    width: 550px;
  }

  @media ${Device.desktop} {
    padding: 62px 85px 0;
    width: 1440px;
  }
`;

const BlogSubContainer = styled.div`
  position: relative;
  width: 100%;
  padding:  20px 25px;
  z-index: 6;
  background-color: ${(props) => props.theme.color.IVORY};
  border-radius: 32px 32px 0 0;

  @media ${Device.desktop} {
    padding: 0 85px;
    margin: 0 auto;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 24px 24px 0 0;
    z-index: 0;
    margin-top: 50px;
  }
`;

const CopyImg = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 5px;
  cursor: pointer;
  
  @media ${Device.desktop} {
    width: 32px;
    height: 32px;
  }
`;

const DropDownMenu = styled.div<{ isHovered: boolean }>`
  display: ${(props) => (props.isHovered ? "flex" : "none")};
  flex-direction: column;
  gap: 16px;
  border: 2px solid ${(props) => props.theme.color.BROWN_2};
  padding: 32px;
  border-radius: 20px;
  position: absolute;
  left: 72px;
  top: 78px;
  z-index: 1;
  width: 269px;
  background: ${(props) => props.theme.color.SHARK2};
  overflow-x: auto;
  height: 400px;

  @media ${Device.tab} {
    left: 183px;
    top: 86px;
  }

  @media ${Device.desktop} {
    left: 1100px;
    top: 150px;
    height: 572px;
    width: 300px;
    border-radius: 24px;
    padding: 42px;
    gap: 20px;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.color.FOREST_GREEN};
  border-radius: 20px;
  cursor: pointer;
  padding: 12px 0;
  width: 214px;
  text-align: center;
  box-shadow: 0 7px 0 #085245;
  position: sticky;
  bottom: 30px;
  ${MIXINS.FontMixin({
    size: "14px",
    font: "Gilroy",
    weight: 600,
    lineHeight: "16px",
  })}
  color: ${(props) => props.theme.color.WHITE};

  @media ${Device.tab} {
    border-radius: 14px;
    padding: 14px 0;
    width: 356px;
    ${MIXINS.FontMixin({ size: "18px", lineHeight: "24px" })}
  }

  @media ${Device.desktop} {
    border-radius: 40px;
    padding: 20px 66px;
    width: auto;
    ${MIXINS.FontMixin({ size: "24px", lineHeight: "27px" })}
  }
`;

const NavText = styled.a`
  ${MIXINS.FontMixin({
    font: "inter",
    weight: 700,
    size: "14px",
    lineHeight: "18px",
  })};
  color: ${(props) => props.theme.color.GREY_2};
  cursor: pointer;
  display: flex;
  align-items: center;

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 700,
      size: "20px",
      lineHeight: "18px",
    })};
  }
`;

const NavTextUnderlined = styled(NavText)`
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
`;

const BlogFooter = styled.div`
  z-index: 6;
  position: relative;
`;

const Menu = styled.a<{ handelCategory: boolean }>`
  ${MIXINS.FontMixin({
    font: "inter",
    weight: 700,
    size: "14px",
    lineHeight: "18px",
  })};
  color: ${(props) =>
    props.handelCategory
      ? props.theme.color.FOREST_GREEN
      : props.theme.color.MINE_SHAFT_3};

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 500,
      size: "20px",
      lineHeight: "24px",
    })};
  }
  &: hover {
    color: ${(props) => props.theme.color.WHITE};
  }
`;

const FactCheckedContainer = styled.div`
  border: 1px solid ${(props) => props.theme.color.LIGHT_GREEN_2};
  border-radius: 16px;
  padding: 2px;
  color: ${(props) => props.theme.color.OLIVINE};
  background: ${(props) => props.theme.color.LIGHT_GREEN_2};
  ${MIXINS.FontMixin({
    font: "Gilroy",
    weight: 500,
    size: "12px",
    lineHeight: "16px",
  })};
  align-self: start;
  display: flex;
  align-items: center;

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "Gilroy",
      weight: 600,
      size: "16px",
      lineHeight: "19px",
    })};
    padding: 8.5px 13.5px;
    gap: 5px;
  }
`;

const ButtonWrapper = styled.a<{ isScrolled: boolean }>`
  display: ${(props) => (props.isScrolled ? "flex" : "none")};
  justify-content: center;
  flex-direction: column;
  position: fixed;
  bottom: 50px;
  z-index: 99;
  max-width: 360px;
  margin: 0 auto;
  top: 92%;
  left: 45%;
  transform: translate(-50%, -50%);
  align-self: center;

  @media ${Device.tab} {
    left: 50%;
  }
`;

const ScrollTop = styled.button<{ isScrolled: boolean }>`
  display: ${(props) => (props.isScrolled ? " block" : "none")};
  position: fixed;
  bottom: 57px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  border-radius: 50%;
  outline: none;
  color: white;
  cursor: pointer;
  background: ${(props) => props.theme.color.GREY_3};
  width: 40px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.color.FOREST_GREEN};

  @media ${Device.tab} {
    bottom: 80px;
    right: 83px;
  }

  @media ${Device.desktop} {
    width: 64px;
    height: 64px;
    bottom: 70px;
    right: 370px;
  }
`;

const UpArrow = styled.img`
  width: 12px;
  height: 16px;

  @media ${Device.desktop} {
    width: 16px;
    height: 22px;
  }
`;

const CopyLink = styled.div`
  padding: 20px 0;
  display: flex;

  @media ${Device.desktop} {
    margin-bottom: 15px;
  }
`;

const CopyLinkText = styled.div`
  ${MIXINS.FontMixin({
    font: "inter",
    weight: 700,
    size: "14px",
    lineHeight: "18px",
  })};
  color: ${(props) => props.theme.color.FOREST_GREEN};
  text-decoration: underline;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: auto;
  cursor: pointer;

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 700,
      size: "24px",
      lineHeight: "36px",
    })};
  }
`;

const DisclaimerTitle = styled.div`
  ${MIXINS.FontMixin({
    font: "Gilroy",
    weight: 700,
    size: "28px",
    lineHeight: "32px",
  })};
  color: ${(props) => props.theme.color.SHARK1};

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "Gilroy",
      weight: 700,
      size: "36px",
      lineHeight: "40px",
    })};
  }
`;

const TocTitle = styled.div`
  ${MIXINS.FontMixin({
    font: "Gilroy",
    weight: 600,
    size: "20px",
    lineHeight: "24px",
  })};
  color: ${(props) => props.theme.color.GREY_2};
  margin-bottom: 12px;

  @media ${Device.desktop} {
    color: ${(props) => props.theme.color.SHARK1};
    ${MIXINS.FontMixin({
      font: "Gilroy",
      weight: 600,
      size: "36px",
      lineHeight: "40px",
    })};
    margin-bottom: 36px;
  }
`;

const NumberedList = styled.ol`
  list-style-type: decimal;
  padding-left: 20px;
  margin: 0 auto;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  color: ${(props) => props.theme.color.GREY_2};
  ${MIXINS.FontMixin({
    font: "inter",
    weight: 500,
    size: "16px",
    lineHeight: "24px",
  })};
  margin: 12px 0;
  &: hover {
    color: ${(props) => props.theme.color.FOREST_GREEN};
    cursor: pointer;
  }

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 500,
      size: "24px",
      lineHeight: "40px",
    })};
    margin: 32px 0;
  }
`;
const SocialMediaImage = styled.img`
`;

const Description = styled.div`
  ${MIXINS.FontMixin({
    font: "Gilroy",
    weight: 400,
    size: "12px",
    lineHeight: "16px",
  })};
  color: ${(props) => props.theme.color.MINE_SHAFT_3};
  margin-bottom: 16px;
  width: 80%;
  align-self: start;

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 500,
      size: "20px",
      lineHeight: "24px",
    })};
    width: auto;
    gap: 0.5rem;
    display: flex;
    margin-bottom: 32px;
  }
`;

const DescriptionSpan = styled.a`
  ${MIXINS.FontMixin({
    font: "Gilroy",
    weight: 700,
    size: "12px",
    lineHeight: "16px",
  })};
  color: ${(props) => props.theme.color.MINE_SHAFT_3};
  text-decoration: underline;
  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 500,
      size: "20px",
      lineHeight: "24px",
    })};
  }
`;

const BlogPoster = styled.div`
  position: sticky;
  z-index: 1;
  top: 0px;
  width: 100%;
  background: ${(props) => props.theme.color.SHARK2};

  @media ${Device.desktop} {
    margin: 0 auto;
    position: relative;
  }
`;

const BlogPage = styled.div`
  position: relative;
  background: ${(props) => props.theme.color.IVORY};
`;

const Arrow = styled.img`
  height: 16px;
  width: 16px;
  @media ${Device.desktop} {
    height: 22px;
    width: 24px;
  }
`;

const ArrowLeft = styled(Arrow)`
  transform: rotate(270deg);
`;

const SourcesTitle = styled.div`
  color: ${(props) => props.theme.color.BOMBAY_GREY};
  ${MIXINS.FontMixin({
    font: "Gilroy",
    weight: 700,
    size: "28px",
    lineHeight: "32px",
  })};
  self-align: center;
  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "Gilroy",
      weight: 600,
      size: "36px",
      lineHeight: "40px",
    })};
  }
`;

const SourceLink = styled.a`
  color: ${(props) => props.theme.color.JADE_200};
  ${MIXINS.FontMixin({
    font: "inter",
    weight: 400,
    size: "16px",
    lineHeight: "32px",
  })};
  text-decoration: underline;
  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 500,
      size: "24px",
      lineHeight: "36px",
    })};
  }
`;

const SourceLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  gap: 2px;
  justify-content: center;
  @media ${Device.desktop} {
    margin-top: 8px;
    gap: 8px;
  }
`;

const SourceArrow = styled.img`
  height: 24px;
  width: 24px;
  @media ${Device.desktop} {
    height: 36px;
    width: 36px;
  }
`;

const FiLogo = styled.img`
  height: 24px;
  width: 24px;
  @media ${Device.desktop} {
    height: 40px;
    width: 40px;
  }
`;

const RightArrow = styled.img`
  height: 24px;
  width: 24px;
  @media ${Device.desktop} {
    height: 32px;
    width: 32px;
  }
`;

const RelatedSubBlog = styled.a`
  height: 140px;
  width: 140px;
  border-radius: 24px;
  position: relative;
  @media ${Device.desktop} {
    height: 191px;
    width: 185px;
  }
`;

const RelatedBlogSubImage = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 24px;
  object-fit: cover;
  @media ${Device.desktop} {
    height: 191px;
    width: 185px;
  }
`;

const RelatedBlogGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 24px;
  height: 140px;
  width: 140px;
  border-radius: 24px;
  object-fit: cover;
  background-image: linear-gradient(#18181b, #18191b);
  opacity: 0.7;

  @media ${Device.desktop} {
    height: 191px;
    width: 185px;
  }
`;

const RelatedBlogTitle = styled.div`
  color: ${(props) => props.theme.color.WHITE};
  ${MIXINS.FontMixin({
    font: "inter",
    weight: 700,
    size: "16px",
    lineHeight: "20px",
  })};
  position: absolute;
  width: 100%;
  margin: 0 auto 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 17px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  white-space: break-spaces;
  max-height: 80px;
  top: 45px;

  @media ${Device.desktop} {
    top: 50px;
    margin: 0 auto;
    padding: 17px;
  }
`;

const RelatedBlogSubTitle = styled.div`
  color: ${(props) => props.theme.color.WHITE};
  ${MIXINS.FontMixin({
    font: "inter",
    weight: 700,
    size: "14px",
    lineHeight: "18px",
  })};
  position: absolute;
  top: 110px;
  padding: 0 17px;

  @media ${Device.desktop} {
    top: 115px;
    padding: 17px;
  }

`;

const NavTitle = styled.a`
  color: ${(props) => props.theme.color.GREY};
  ${MIXINS.FontMixin({
    font: "inter",
    weight: 400,
    size: "16px",
    lineHeight: "20px",
  })};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: auto;

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 500,
      size: "24px",
      lineHeight: "28px",
    })};
  }
`;

const RelatedBlogsTitle = styled.span`
  color: ${(props) => props.theme.color.GREY};
  ${MIXINS.FontMixin({
    font: "Gilroy",
    weight: 700,
    size: "28px",
    lineHeight: "32px",
  })};

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "Gilroy",
      weight: 600,
      size: "36px",
      lineHeight: "40px",
    })};
  }
`;

const NavTitleVariant = styled(NavTitle)`
  overflow: visible;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0px 10px;
  width: 100%;
`;

const RelatedBlogs = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  @media ${Device.tab} {
    gap: 25px;
  }

  @media ${Device.desktop} {
    width: 827px;
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 32px;
`;

const SocialMediaLink = styled.a`
  height: 40px;
  width: 40px;
  border-radius: 4px;
`;

const RelatedBlogsContainer = styled.div`
  padding-bottom: 40px;
  position: relative;
  z-index: 8;
  margin: 0 auto;
`;

const Timer = styled.img`
  height: 11px;
  width: 12px;

  @media ${Device.desktop} {
    height: 24px;
    width: 24px;
  }
`;


const AppHeaderContainer = styled.div`
    background-color: ${Colors.MINE_SHAFT};
`;
const SizedBox = styled.div<{ height?: number, width?: number }>`
    height: ${(props) => props.height || 0}px;
    width: ${(props) => props.width || 0}px;
`;
const TitleContainer = styled.div`

    text-align: center;
    background-color: ${Colors.MINE_SHAFT};

    @media ${Device.tab} {
        text-align: left;
        padding: 30px 100px;
    }

    @media ${Device.desktop} {
        padding: 100px 200px;
    }
`;

const ContentConatiner = styled.div`
    padding: 20px;
    background-color: ${Colors.CHALK_GREY};

    @media ${Device.desktop} {
        padding: 100px 200px;
    }
`;




const ContentGrid = styled.div`
  grid-column-gap: 25px;  /* Keep the same gap between columns */
  grid-row-gap: 55px;     /* Keep the same gap between rows */
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); /* Automatically adjust column width */
  grid-template-rows: auto;
  grid-auto-columns: 1fr;
  display: grid;
  width: 100%;
  max-width: 1200px;



  @media ${Device.tab} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        
    }

    @media ${Device.desktop} {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto auto;
    }
`;

const GridContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const GridItem = styled.div`
    width: 100%;
    height: 515px;
    background-color: ${Colors.WHITE};
    border-radius: 16px;
    position: relative;
    cursor: pointer;
`;

const MyImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const MyImageContainer = styled.div`
    height: 45%;
    object-fit: cover;
`;

const CardContentContainer = styled.div`
    padding: 15px;
`;

const CardFooterContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
`;

const RelatedCategoriesContainer = styled.div`
    margin-top: 50px;
`;

const RelatedCategoriesGrid = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
`;

const RelatedCategoriesItem = styled.div`
    border-radius: 50px;
    height: 50px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
    color: ${Colors.FOREST_GREEN};

    border: 2px solid ${Colors.FOREST_GREEN};
`;

const ArrowContainer = styled.div<{ left?: string, right?: string }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${(props) => props.left && `left: ${props.left}`};  
    ${(props) => props.right && `right: ${props.right}`};
`;

export {
    Timer, RelatedBlogsContainer, SocialMediaLink, SocialMediaLinks, RelatedBlogs, NavContainer,NavTitleVariant,
    RelatedBlogsTitle, RelatedBlogSubTitle, RelatedBlogTitle, RelatedBlogGradient, RelatedBlogSubImage, RelatedSubBlog,
    RightArrow, FiLogo, SourceArrow, SourceLinks, SourceLink, SourcesTitle, ArrowLeft, Arrow, BlogPage, BlogPoster, DescriptionSpan,
    Description, SocialMediaImage, ListItem, NumberedList, TocTitle, DisclaimerTitle, CopyLink, UpArrow, ScrollTop, ButtonWrapper,
    FactCheckedContainer, Menu, BlogFooter, NavTextUnderlined, Button, DropDownMenu, CopyImg, BlogSubContainer, Container,PosterImage,
    LineBreak, Title, BlogContainer, Header, Poster, NavText, NavTitle, CopyLinkText, H1SEO, PosterImageDesktop, PosterImageMobile, AppHeaderContainer,SizedBox,TitleContainer,ContentConatiner,
    ContentGrid,GridContainer,GridItem,MyImage,MyImageContainer,CardContentContainer,CardFooterContainer,RelatedCategoriesContainer,RelatedCategoriesGrid,
    RelatedCategoriesItem,ArrowContainer
}

