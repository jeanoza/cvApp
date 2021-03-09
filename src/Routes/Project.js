import styled from "styled-components";
import { MainInformatique } from "Components/Main";
import { ImageMain } from "Components/Image";
import { useEffect, useState } from "react";
import { getProjectList } from "database";

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
const Informatique = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    getProjectList(setProjectList);
    document.title = "Project | CV App";
  }, []);
  return (
    <Container>
      {projectList &&
        projectList.length > 0 &&
        projectList.map((project) => (
          <MainInformatique
            key={project.id}
            backdropUrl={project.backdrop_url}
            text1={toHashTag(project.text1)}
            text2={toHashTag(project.text2)}
            text3={toHashTag(project.text3)}
            text4={toHashTag(project.text4)}
            comment1={project.comment1}
            comment2={project.comment2}
            link1={project.link1}
            link2={project.link2}
            author={project.author}
          >
            <ImageMain
              imageUrl={project.image_url}
              title={project.title}
              sub={project.sub}
            />
          </MainInformatique>
        ))}
    </Container>
  );
};

export default Informatique;
