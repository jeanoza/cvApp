import styled from "styled-components";
import { ImageMain } from "Components/Image";
import { useEffect, useState } from "react";
import {
  getProfessionList,
  getFormationList,
  getLangueList,
  getInformatiqueList,
} from "database";

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
    width: 80%;
    margin: 0px 10%;
    margin-top: 30px;
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
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

const Resume = () => {
  const [formationList, setFormationList] = useState([]);
  const [professionList, setProfessionList] = useState([]);
  const [langueList, setLangueList] = useState([]);
  const [informatiqueList, setInformatiqueList] = useState([]);

  useEffect(() => {
    getFormationList(setFormationList);
    getProfessionList(setProfessionList);
    getLangueList(setLangueList);
    getInformatiqueList(setInformatiqueList);
    document.title = "Home | CV App";
  }, []);
  return (
    <Container>
      <Section>
        <SectionTitle>EXPERIENCES PROFESSIONNELLES</SectionTitle>
        {professionList &&
          professionList.length > 0 &&
          professionList.map((profession) => (
            <ImageMain
              key={profession.id}
              imageUrl={profession.image_url}
              title={profession.title}
              sub={`${profession.sub} (${profession.year_start} ~ ${profession.year_end})`}
            />
          ))}
      </Section>
      <Section>
        <SectionTitle>FORMATIONS</SectionTitle>
        {formationList &&
          formationList.length > 0 &&
          formationList.map((formation) => (
            <ImageMain
              key={formation.id}
              imageUrl={formation.image_url}
              title={`${formation.title} - ${formation.sub}`}
              sub={`${formation.text1} ${formation.text2} (${formation.year_start} ~ ${formation.year_end})`}
            />
          ))}
      </Section>
      <Section>
        <SectionTitle>LANGUES</SectionTitle>
        <List>
          {langueList &&
            langueList.length > 0 &&
            langueList.map((langue) => (
              <Item key={langue.id} bgUrl={langue.url} />
            ))}
        </List>
      </Section>
      <Section>
        <SectionTitle>INFORMATIQUE</SectionTitle>
        <List>
          {informatiqueList &&
            informatiqueList.length > 0 &&
            informatiqueList.map((informatique) => (
              <Item key={informatique.id} bgUrl={informatique.url} />
            ))}
        </List>
      </Section>
    </Container>
  );
};

export default Resume;
