import styled from "styled-components";
import { ImageMain } from "Components/Image";
import { useEffect } from "react";

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
    width: 98vw;
    min-width: 950px;
    left: 0;
  }
`;
const Section = styled.div`
  margin-top: 30px;
  width: 62%;
  border: 1px solid rgb(20, 20, 20, 0.1);
  background-color: rgb(255, 255, 255);
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const SectionTitle = styled.h1`
  color: #0984e3;
  font-weight: 600;
  padding: 15px;
`;
const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 10px 15px;
`;
const Item = styled.li`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

const Resume = () => {
  useEffect(() => {
    document.title = "Home | CV App";
  }, []);
  return (
    <Container>
      <Section>
        <SectionTitle>EXPERIENCES PROFESSIONNELLES</SectionTitle>
        <ImageMain
          imageUrl="https://img.khan.co.kr/news/2020/04/06/l_2020040601000690900052931.jpg"
          title="Armée de Terre de la Corée du Sud"
          sub="Chef du département de service de sécurité informatique (2014 ~ 2016)"
        />
        <ImageMain
          imageUrl="https://logodownload.org/wp-content/uploads/2017/10/starbucks-logo-4.png"
          title="Starbucks France"
          sub="Barista (sept. 2019 ~)"
        />
        <ImageMain
          imageUrl="http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png"
          title="Burger King France"
          sub="Equipier Polyvalent (mars ~ sept. 2019)"
        />
      </Section>
      <Section>
        <SectionTitle>FORMATIONS</SectionTitle>
        <ImageMain
          imageUrl="https://upload.wikimedia.org/wikipedia/fr/thumb/3/38/Logo_ehess.svg/1200px-Logo_ehess.svg.png"
          title="Ecole des Hautes Etudes en Sciences Sociales"
          sub="Master Etudes sur le genre parcours sociologie (2019 ~)"
        />
        <ImageMain
          imageUrl="https://boutique.univ-paris1.fr/img/cms/logo-mob.png"
          title="Université Paris 1 Panthéon-Sorbonne"
          sub="Licence 3 Philosophie parcours sociologie (2017 ~ 2018)"
        />
        <ImageMain
          imageUrl="https://www.jbnu.ac.kr/kor/images/227_10.jpg"
          title="Université nationale Chonbuk en Corée du Sud"
          sub="Double Licence Philosophie et Français (2010 ~ 2014)"
        />
      </Section>
      <Section>
        <SectionTitle>Langues</SectionTitle>
        <List>
          <Item bgUrl="https://img2.freepng.fr/20180702/ttz/kisspng-flag-of-france-5b3ac8f90ead60.0732531715305791930601.jpg" />
          <Item bgUrl="https://cdn.countryflags.com/thumbs/south-korea/flag-3d-round-250.png" />
          <Item bgUrl="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-3d-round-250.png" />
          <Item bgUrl="https://rlv.zcache.ca/autocollants_ronds_de_drapeau_du_japon-r185eb9c9d8b64f0882709d7f5d031bcc_0ugmp_8byvr_540.jpg" />
        </List>
      </Section>
      <Section>
        <SectionTitle>Informatiques</SectionTitle>
        <List>
          <Item bgUrl="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
          <Item bgUrl="https://logoeps.com/wp-content/uploads/2013/03/java-eps-vector-logo.png" />
          <Item bgUrl="https://i.pinimg.com/originals/8f/ad/12/8fad125b8f6082bdb7deb0aa593dfb49.jpg" />
          <Item bgUrl="https://cms-informatic.com/wp-content/uploads/2020/01/logo-langage-C.png" />
          <Item bgUrl="https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png" />
        </List>
      </Section>
    </Container>
  );
};

export default Resume;
