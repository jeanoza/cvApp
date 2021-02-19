import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(20, 20, 20, 0.1);
  margin-top: 30px;
  width: 62%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Backdrop = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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

const CommentList = styled.ul`
  margin: 10px 15px;
`;
const Comment = styled.li`
  margin-bottom: 5px;
`;
const CommentTitle = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;
const CommentSub = styled.span``;
const CommentSubInformatique = styled.span`
  text-decoration: underline;
`;

export const Main = ({
  backdropUrl,
  year,
  text1,
  text2,
  text3,
  text4,
  comment1,
  comment2,
  comment3,
  author,
  children,
}) => (
  <Container>
    {children}
    <Backdrop bgImage={backdropUrl}>
      <Text>
        {year}
        {text1}
        {text2}
        {text3}
        {text4}
      </Text>
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
    {author && (
      <CommentList>
        <Comment>
          <CommentTitle>{author}</CommentTitle>
          <CommentSub>{comment1}</CommentSub>
        </Comment>
        <Comment>
          <CommentTitle>{author}</CommentTitle>
          <CommentSub>{comment2}</CommentSub>
        </Comment>
        <Comment>
          <CommentTitle>{author}</CommentTitle>
          <CommentSub>{comment3}</CommentSub>
        </Comment>
      </CommentList>
    )}
  </Container>
);

export const MainInformatique = ({
  backdropUrl,
  year,
  text1,
  text2,
  text3,
  text4,
  comment1,
  comment2,
  link1,
  link2,
  author,
  children,
}) => (
  <Container>
    {children}
    <Backdrop bgImage={backdropUrl}>
      <Text>
        {year}
        {text1}
        {text2}
        {text3}
        {text4}
      </Text>
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
    <CommentList>
      <Comment>
        <CommentTitle>{author}</CommentTitle>
        <CommentSubInformatique>
          <a href={link1} target="_blank">
            {comment1}
            <FontAwesomeIcon icon={faLink} />
          </a>
        </CommentSubInformatique>
      </Comment>
      <Comment>
        <CommentTitle>{author}</CommentTitle>
        <CommentSubInformatique>
          <a href={link2} target="_blank">
            {comment2}
            <FontAwesomeIcon icon={faLink} />
          </a>
        </CommentSubInformatique>
      </Comment>
    </CommentList>
  </Container>
);
