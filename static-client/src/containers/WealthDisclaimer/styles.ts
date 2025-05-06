import styled from "styled-components";
import { MAX_WIDTH_MEDIA_SCREENS } from "@/Themes/Device";


const Container = styled.div`
  margin: 100px 100px;
  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    margin: 100px 30px;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  text-align: center;
`;

const List = styled.ul`
  font-size: 20px;
  line-height: 30px;
  padding: 10px;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;

export {
    Container,
    Title,
    List,
    ListItem
}
