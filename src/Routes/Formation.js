import styled from "styled-components";
import { Main } from "Components/Main";
import { ImageMain } from "Components/Image";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50px;
  left: 18vw;
  width: 100%;
  padding-bottom: 30px;
  @media (max-width: 1024px) {
    top: 300px;
    width: 90vw;
    min-width: 900px;
    left: 0;
  }
`;
const Formation = () => {
  return (
    <Container>
      <Main
        backdropUrl="https://www.ehess.fr/sites/default/files/media/image/entre-2.jpg"
        year="Depuis # 2019 #"
        text1=" Master # Etudes # sur # le # genre #"
        text2=" parcours #"
        text3=" sociologie #"
      >
        <ImageMain
          imageUrl="https://upload.wikimedia.org/wikipedia/fr/thumb/3/38/Logo_ehess.svg/1200px-Logo_ehess.svg.png"
          title="Ecole des Hautes Etudes en Sciences Sociales"
          sub="Paris"
        />
      </Main>
      <Main
        backdropUrl="http://www.sorbonne-universite.fr/sites/default/files/media/2019-12/0-universite.jpg"
        year="2017 # 2018 #"
        text1=" Licence3 # Philosophie # "
        text2=" parcours # sociologie # "
      >
        <ImageMain
          imageUrl="https://boutique.univ-paris1.fr/img/cms/logo-mob.png"
          title="Université Paris 1 Panthéon-Sorbonne"
          sub="Paris"
        />
      </Main>
      <Main
        backdropUrl="https://cdn.news.unn.net/news/photo/202007/232338_117595_5442.jpg"
        year="# 2010 # 2014 #"
        text1=" Double # Licence #"
        text2=" Philosophie # Français"
      >
        <ImageMain
          imageUrl="https://www.jbnu.ac.kr/kor/images/227_10.jpg"
          title="Université nationale Chonbuk en Corée du Sud"
          sub="Corée du Sud"
        />
      </Main>
    </Container>
  );
};

export default Formation;
