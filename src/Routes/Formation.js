import styled from "styled-components";
import { Main } from "Components/Main";
import { ImageMain } from "Components/Image";
import { useEffect, useState } from "react";
import { formationApi } from "api";

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
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    const getFormationApi = async () => {
      try {
        const { data: result } = await formationApi();
        setFormations(result);
      } catch (e) {
        console.error(e.message);
      } finally {
        console.log(formations);
        console.log("formation updated");
      }
    };
    getFormationApi();
    document.title = "Formation | CV App";
  }, []);

  return (
    <Container>
      {formations &&
        formations.length > 0 &&
        formations.map((formation) => (
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
              sub={formation.subtitle}
            />
          </Main>
        ))}
    </Container>
  );
};

export default Formation;
