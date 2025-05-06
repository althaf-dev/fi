import { Font } from "@/components";
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import Colors from "@/Themes/Colors";
import { Device } from "@/Themes/Device";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 340px;
  padding: 45px 0;
  top: 10px;
  position: relative;
  margin: 0 auto;
  gap: 40px;
  font-family: Gilroy;

  @media ${Device.tab} {
    width: 550px;
  }

  @media ${Device.desktop} {
    padding: 62px 85px;
    width: 1440px;
  }
`;

const StyledTD = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${Colors.GREEN_3};
  word-break: break-word;
`;

const StyledTH = styled.th`
  padding: 10px;
  color: ${Colors.WHITE};
`;

const AfterChecksum = styled.p`
  font-family: Gilroy;
  color: ${Colors.GREY_2};

  & ul {
    padding-left: 20px;
  }

  & li {
    margin-bottom: 10px;
  }

  & strong {
    color: ${Colors.GREEN_3};
  }

  & p {
    margin-bottom: 20px;
  }

  & ul {
    margin-bottom: 20px;
  }

  & p:last-child {
    margin-bottom: 0;
  }

  & ul:last-child {
    margin-bottom: 0;
  }

  & li:last-child {
    margin-bottom: 0;
  }

  & strong:last-child {
    margin-bottom: 0;
  }

  & p:first-child {
    margin-top: 0;
  }

  & ul:first-child {
    margin-top: 0;
  }

  & li:first-child {
    margin-top: 0;
  }

  & strong:first-child {
    margin-top: 0;
  }

  & p:last-child {
    margin-bottom: 0;
  }

  & ul:last-child {
    margin-bottom: 0;
  }
`;

const ChecksumPage = ({ data }: any) => {
    if (!data.data) {
        return <div>Failed to fetch data</div>;
    }

  const checksumTableHeader = data.data.attributes.checksum_table.header;
  return (
    <div>
      <div
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <AppHeader menuColor='GRAY' fontColor='GREY_2' />

        <Container>
          <Font font='h2' tagType='h2'>
            {data.data.attributes.title}
          </Font>
          <p
            style={{
              fontFamily: "Gilroy",
              color: Colors.GREY_2,
            }}
          >
            {data.data.attributes.description}
          </p>
          <AfterChecksum dangerouslySetInnerHTML={{
           __html: data.data.attributes.content_before_table
          }}>
          </AfterChecksum>
          <table
            style={{
              width: "100%",
              borderSpacing: "20px",
              borderCollapse: "collapse",
              fontFamily: "Gilroy",
              textAlign: "left",
            }}
          >
            <tr
              style={{
                backgroundColor: Colors.GREEN_3,
              }}
            >
              <StyledTH>
                {checksumTableHeader.app_name}
              </StyledTH>
              <StyledTH>
                {checksumTableHeader.store}
              </StyledTH>
              <StyledTH>
                {checksumTableHeader.app_version}
              </StyledTH>
              <StyledTH>
                {checksumTableHeader.checksum}
              </StyledTH>
            </tr>
            {data.data.attributes.checksum_table.row.map((row: any) => {
              return (
                <tr key={row.checksum}>
                  <StyledTD>{row.app_name}</StyledTD>
                  <StyledTD>{row.store}</StyledTD>
                  <StyledTD>{row.app_version}</StyledTD>
                  <StyledTD>{row.checksum}</StyledTD>
                </tr>
              );
            })}
          </table>
          <AfterChecksum
            dangerouslySetInnerHTML={{
              __html: data.data.attributes.content_after_table,
            }}
          ></AfterChecksum>
        </Container>
        <AppFooter />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const { STRAPI } = process.env;

  try{
      const response = await axios.get(
        `${STRAPI}/api/checksum-page?populate[0]=checksum_table&populate[checksum_table][populate][0]=row&populate[checksum_table][populate][1]=header`,
        {
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
          },
        }
      );
      return {
        props: {
          data: response.data,
        },
      };
    } catch (error) {
        return {
            props: {
            data: {},
            },
        };
    }
};

export default ChecksumPage;
