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
  min-width: 600px;
  padding-bottom: 30px;
  @media (max-width: 1024px) {
    width: 98vw;
    top: 300px;
    left: 0;
  }
`;
const Profession = () => {
  return (
    <Container>
      <Main
        backdropUrl="https://user-images.githubusercontent.com/64304902/108414545-a78b8c00-722c-11eb-82e2-7bab5095d2d4.jpeg"
        year="2014 # 2016 #"
        text1=" Officier # d'état # major #"
        text2=" Administration #"
        text3=" Base # de # données #"
        text4=" Rédaction # des # projets"
        comment1=" Gestion de bases de données via  Logiciel militaire équivalent à SQL"
        comment2=" Administration : Microsoft Office, Système Administratif Régimentaire"
        comment3=" Rédaction et Exposé d’un projet au plan de la sécurité informatique"
        author="kyubong_choi"
      >
        <ImageMain
          imageUrl="https://lh3.googleusercontent.com/proxy/ExFtGR9Ok0INFoOhs4IA4NBheG3rUXiBYzLe3F4AujDFs46E1RBdVlCq4euZ8ps7xGPFoSqhhoyPPyCwkBj55EEboaEBfb3nAIuy7zOLZPB-bCk5Fa2IRwqHK3goNdNbuGOMbMCqPWVpNNYv1OXM1k-h9VeKE4XDVAv3I4xlqqvnr9DnEIumvbSS8Ea1sjKfWhqZ37TMD3cYemOHck4SPsI6hDSX"
          title="Armée de Terre de la Corée du Sud"
          sub="Chef du département de service de sécurité informatique"
        />
      </Main>
      <Main
        backdropUrl="https://fastly.4sqi.net/img/general/600x600/Dsu9FMLYDvrnQkelc6kxWEcEV946T5rOaRR9el6qxTQ.jpg"
        year="Depuis # Sept # 2019 #"
        text1=" Service # au # client # "
        text2=" Travail # en # équipe # "
      >
        <ImageMain
          imageUrl="https://logodownload.org/wp-content/uploads/2017/10/starbucks-logo-4.png"
          title="Starbucks"
          sub="Barista"
        />
      </Main>
      <Main
        backdropUrl="https://user-images.githubusercontent.com/64304902/108413453-57f89080-722b-11eb-9d11-8bcf752d5396.jpeg"
        year="Mars # Sept # 2019 #"
        text1=" Service # au # client #"
        text2=" Travail # en # équipe #"
      >
        <ImageMain
          imageUrl="http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png"
          title="Burger King"
          sub="Equipier Polyvalent"
        />
      </Main>
    </Container>
  );
};

export default Profession;
