import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-width: 325px;
`;

const ImagePhoto = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: center;
  background-size: cover;
  width: 55px;
  height: 55px;
  border-radius: 28px;
  background-color: rgb(20, 20, 20, 0.8);
`;

const ImageText = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ImageTitle = styled.div`
  font-weight: 600;
`;
const ImageSub = styled.div`
  opacity: 0.7;
`;

const Image = ({ imageUrl, title, sub }) => (
  <Container>
    <ImagePhoto bgUrl={imageUrl} />
    <ImageText>
      <ImageTitle>{title}</ImageTitle>
      <ImageSub>{sub}</ImageSub>
    </ImageText>
  </Container>
);
export default Image;
