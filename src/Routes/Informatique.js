import styled from "styled-components";
import { MainInformatique } from "Components/Main";
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
const Informatique = () => {
  useEffect(() => {
    document.title = "Informatique | CV App";
  }, []);
  return (
    <Container>
      <MainInformatique
        backdropUrl="https://user-images.githubusercontent.com/64304902/108257957-cc65fd80-715f-11eb-852b-b3b4ebeb930a.png"
        text1=" React # Hook # Axios #"
        text2=" JavaScript # ES6 # ArrowFunction #"
        text3=" async() # await # .map() # .filter() #"
        text4=" API # Github #"
        comment1="Go to Page "
        comment2="Source Code "
        link1="https://jeanoza.github.io/movistagram/"
        link2="https://github.com/jeanoza/movistagram/"
        author="kyubong.choi"
      >
        <ImageMain
          imageUrl="https://cdn.auth0.com/blog/react-js/react.png"
          title="React Project"
          sub="Movistagram"
        />
      </MainInformatique>
      <MainInformatique
        backdropUrl="https://user-images.githubusercontent.com/64304902/108256955-6dec4f80-715e-11eb-8d3e-7fbe7cfe6634.png"
        text1=" JavaScript # ES6 #"
        text2=" LocalStroage # addEventListner() #"
        text3=" fetch() # WeatherAPI #"
        text4=" Github #"
        comment1="Go to Page "
        comment2="Source Code "
        link1="https://jeanoza.github.io/times_todo_app/"
        link2="https://github.com/jeanoza/times_todo_app/"
        author="kyubong.choi"
      >
        <ImageMain
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          title="JavaScript Project"
          sub="To Do List App"
        />
      </MainInformatique>
      <MainInformatique
        backdropUrl="https://i.morioh.com/dd054f30db.png"
        text1=" Java # Spring # Boot #"
        text2=" Gradle # JPA # MVC # TOD #"
        text3=" RestAPI # MySQL # Response # Request #"
        comment1="This app is realized only backend part"
        comment2="Source Code "
        link2="https://github.com/jeanoza/admin_page"
        author="kyubong.choi"
      >
        <ImageMain
          imageUrl="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9d63a0ed04b871d3dacc8647b7f0927d/spring-boot.png"
          title="Java Spring Boot Project"
          sub="Admin page service - back-end part"
        />
      </MainInformatique>
    </Container>
  );
};

export default Informatique;
