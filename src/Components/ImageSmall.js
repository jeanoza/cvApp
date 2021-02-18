import styled from "styled-components";

const Image = styled.div`
  display: flex;
  width: 100%;
  min-width: 325px;
  margin-bottom: 15px;
`;

const ImagePhoto = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;

  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
`;

const ImageText = styled.div`
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

export default ({ imageUrl, title, sub }) => (
  <Image>
    <ImagePhoto bgUrl={imageUrl} />
    <ImageMore>
      <ImageText>
        <ImageTitle>{title}</ImageTitle>
        <ImageSub>{sub}</ImageSub>
      </ImageText>
      <More>...</More>
    </ImageMore>
  </Image>
);
