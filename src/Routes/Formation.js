import styled from "styled-components";
import { Main } from "Components/Main";
import { ImageMain } from "Components/Image";
import { useEffect, useState } from "react";
import { getFormationList } from "database";

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

const Formation = () => {
  const [formationList, setFormationList] = useState([]);

  useEffect(() => {
    getFormationList(setFormationList);
    document.title = "Formation | CV App";
  }, []);

  return (
    <Container>
      {formationList &&
        formationList.length > 0 &&
        formationList.map((formation) => (
          <Main
            key={formation.id}
            backdropUrl={formation.backdrop_url}
            year={toHashTag(`${formation.year_start} ${formation.year_end}`)}
            text1={toHashTag(formation.text1)}
            text2={toHashTag(formation.text2)}
          >
            <ImageMain
              imageUrl={formation.image_url}
              title={formation.title}
              sub={formation.sub}
            />
          </Main>
        ))}
    </Container>
  );
};

export default Formation;
