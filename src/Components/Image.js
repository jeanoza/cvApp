import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const ContainerSmall = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;
  padding-bottom: 15px;
`;

const ContainerMain = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
`;

const ImagePhoto = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: center;
  background-size: cover;
  width: 55px;
  height: 55px;
  border-radius: 28px;
  background-color: rgb(20, 20, 20, 0.8);
  @media (max-width: 1024px) {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin: 10px;
    margin-left: 30px;
  }
`;

const ImagePhotoSmall = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: center;
  background-size: cover;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
`;

const ImageText = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const ImageTextSmall = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ImageTitle = styled.div`
  font-weight: 600;
`;
const ImageSub = styled.div`
  opacity: 0.7;
`;
const ImageSubSmall = styled.div`
  opacity: 0.7;
  font-size: 12px;
`;
const ImageMore = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const More = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const Image = ({ imageUrl, title, sub }) => (
  <Container>
    <ImagePhoto bgUrl={imageUrl} />
    <ImageText>
      <ImageTitle>{title}</ImageTitle>
      <ImageSub>{sub}</ImageSub>
    </ImageText>
  </Container>
);

export const ImageSmall = ({ imageUrl, title, sub }) => (
  <ContainerSmall>
    <ImagePhotoSmall bgUrl={imageUrl} />
    <ImageMore>
      <ImageTextSmall>
        <ImageTitle>{title}</ImageTitle>
        <ImageSubSmall>{sub}</ImageSubSmall>
      </ImageTextSmall>
      <More>...</More>
    </ImageMore>
  </ContainerSmall>
);

export const ImageMain = ({ imageUrl, title, sub }) => (
  <ContainerMain>
    <ImagePhotoSmall bgUrl={imageUrl} />
    <ImageMore>
      <ImageTextSmall>
        <ImageTitle>{title}</ImageTitle>
        <ImageSubSmall>{sub}</ImageSubSmall>
      </ImageTextSmall>
      <More>...</More>
    </ImageMore>
  </ContainerMain>
);
