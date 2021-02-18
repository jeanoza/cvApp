import styled from "styled-components";
import ImageMain from "Components/ImageMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

const Main = styled.div`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(20, 20, 20, 0.1);
  margin-top: 30px;
  margin-right: 10px;
`;
const Backdrop = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 400px;
  color: rgb(255, 255, 255);
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  transition: opacity 0.5s ease-in-out;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 600;
  padding: 0px 10px;
  font-size: 20px;
`;
const Icons = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;
const LeftIcon = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RightIcon = styled.div``;

export default ({
  imageUrl,
  title,
  sub,
  backdropUrl,
  year,
  text1,
  text2,
  text3,
}) => (
  <Main>
    <ImageMain imageUrl={imageUrl} title={title} sub={sub} />
    <Backdrop bgImage={backdropUrl}>
      <Text>{`${year} # ${text1} # ${text2} # ${text3}`}</Text>
    </Backdrop>
    <Icons>
      <LeftIcon>
        <FontAwesomeIcon icon={faHeart} size="2x" />
        <FontAwesomeIcon icon={faComment} size="2x" />
        <FontAwesomeIcon icon={faPaperPlane} size="2x" />
      </LeftIcon>
      <RightIcon>
        <FontAwesomeIcon icon={faBookmark} size="2x" />
      </RightIcon>
    </Icons>
  </Main>
);
