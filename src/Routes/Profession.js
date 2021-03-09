import styled from "styled-components";
import { Main } from "Components/Main";
import { ImageMain } from "Components/Image";
import { useEffect, useState } from "react";
import { getProfessionList } from "database";

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
const toHashTag = (str) => str.replaceAll(" ", "\n#\n") + "\n#\n";

const Profession = () => {
  const [professionList, setProfessionList] = useState([]);

  useEffect(() => {
    getProfessionList(setProfessionList);
    document.title = "Profession | CV App";
  }, []);
  return (
    <Container>
      {professionList.map((profession) => (
        <Main
          key={profession.id}
          backdropUrl={profession.backdrop_url}
          year={toHashTag(`${profession.year_start} ${profession.year_end}`)}
          text1={toHashTag(profession.text1)}
          text2={toHashTag(profession.text2)}
          text3={profession.text3 && toHashTag(profession.text3)}
          text4={profession.text4 && toHashTag(profession.text4)}
          comment1={profession.comment1}
          comment2={profession.comment2}
          comment3={profession.comment3}
          author={profession.author}
        >
          <ImageMain
            imageUrl={profession.image_url}
            title={profession.title}
            sub={profession.sub}
          />
        </Main>
      ))}
    </Container>
  );
};

export default Profession;
