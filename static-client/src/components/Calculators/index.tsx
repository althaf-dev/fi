import Colors from "@/Themes/Colors";
import { Device, size } from "@/Themes/Device";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { MyFont } from "../styled";
import Link from "next/link";

interface SingleSlidingRowProps {
  title: string;
  data: {
    icon: string;
    title: string;
    backgroundColor: string;
    textColor: string;
    link: string;
  }[];
}

const Container = styled.div`
  margin-top: 40px;
  position: relative;
  padding-bottom: 40px;
  height: 100%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${Colors.BLACK};
  font-family: "Gilroy";
  margin-top: 20px;

  @media ${Device.phone} {
    font-size: 24px;
  }

  @media ${Device.tab} {
    font-size: 32px;
  }

  @media ${Device.desktop} {
    font-size: 32px;
  }
`;

const slide = (width: string) => keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-${width});
    }
`;
const RowContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    gap: 20px;
    margin-top: 20px;
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    @media ${Device.tab} {
        margin-left: ${(props)=> {
            const width = (props?.children as any)?.length * (100 + 50) - window.innerWidth + 500;
            if (width < 0) {
                return 0;
            }
            return -120;
        }}px;
        margin-right: ${(props)=> {
            const width = (props?.children as any)?.length * (100 + 50) - window.innerWidth + 500;
            if (width < 0) {
                return 0;
            }
            return -120;
        }}px;
    }
`;

const StyledImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  border-radius: 24px;
  cursor: pointer;
  background-color: #bcdce7;
  padding: 12px;
  gap: 10px;

  @media ${Device.phone} {
    width: 100px;
    height: 100px;
  }

  @media ${Device.tab} {
    width: 120px;
    height: 120px;
    gap: 20px;
    padding: 20px; 
  }

  @media ${Device.desktop} {
    width: 150px;
    height: 150px;
  }
`;

const StyledImage = styled(Image)`
  width: 40%;
  height: 40%;
  color: red;
`;


export default function SingleSlidingRow({
  data,
  title,
}: SingleSlidingRowProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <RowContainer>
        {data &&
          data.map((item, index) => (
              <Link href={item.link || ""} key={index} target="_blank"
              style={{
                display: "block",
                textDecoration: "none",
                textAlign: "left",
                width: "150px",
                textJustify: "inter-word",
                wordBreak: "break-word",
              }} >
              <StyledImageContainer
                style={{ backgroundColor: item.backgroundColor }}
              >
                { item?.icon &&  <StyledImage
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  color={item.textColor}
                />}
                <MyFont color={item.textColor || "#1c1c1c"} fontSize="14px" fontSizeDesktop="16px" fontWeight={600}>
                  {item.title}
                </MyFont>
              </StyledImageContainer>
              </Link>
          ))}
      </RowContainer>
    </Container>
  );
}
