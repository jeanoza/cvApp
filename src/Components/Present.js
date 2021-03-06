import styled from "styled-components";
import { Image, ImageSmall } from "Components/Image";

const Present = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 11;
  position: fixed;
  top: 80px;
  right: 18%;
  width: 22%;
  background-color: rgb(250, 250, 250);
  @media (max-width: 1024px) {
    width: 100%;
    padding: 30px 5%;
    padding-bottom: 0px;
    flex-direction: row;
    justify-content: space-between;
    top: 50px;
    left: 0;
    right: 0;
  }
`;

const SpanBig = styled.span`
  width: 100%;
  min-width: 300px;
  font-weight: 600;
  opacity: 0.7;
  margin: 20px 0px;
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`;
const GoToWeb = styled.a`
  display: none;
  font-weight: 600;
  color: #0984e3;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export default () => (
  <Present>
    <Image
      imageUrl="https://scontent-cdt1-1.xx.fbcdn.net/v/t31.0-8/17833942_1349547301803677_3715697971698721651_o.jpg?_nc_cat=103&ccb=3&_nc_sid=174925&_nc_ohc=WmcZDHOyqPsAX9N9LWZ&_nc_ht=scontent-cdt1-1.xx&oh=1fc264ebbcf7bdfe85f854276e3e695a&oe=60542999"
      title="Kyubong Choi"
      sub="Sud-Coréen, né 16 septembre 1991"
    />
    <Section>
      <SpanBig>Recherche d’un contrat d’apprentissage</SpanBig>
      <ImageSmall
        imageUrl="https://cdn.auth0.com/blog/react-js/react.png"
        title="Front-End"
        sub="Javascript, ReactJS"
      />
      <ImageSmall
        imageUrl="https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png"
        title="Full-Stack"
        sub="NodeJS, Java Spring Boot, MySQL"
      />
      <GoToWeb
        href="https://jeanoza.github.io/cvApp/"
        target="_blank"
        rel="noreferrer"
      >
        Pour consulter ce CV en ligne : Click ici
      </GoToWeb>
    </Section>
    <Section>
      <SpanBig>Contact</SpanBig>
      <ImageSmall
        imageUrl="https://cdn1.iconfinder.com/data/icons/real-estate-84/64/x-24-512.png"
        title="Adress"
        sub="18 rue des gobelins 75013 Paris"
      />
      <ImageSmall
        imageUrl="https://upload.wikimedia.org/wikipedia/fr/7/7e/Phone_iOS.png"
        title="Téléphone Portable"
        sub="(+33) 6 95 88 67 82"
      />
      <a href="mailto:choikb916@gmail.com">
        <ImageSmall
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCiHwPFKsGycctebkc5YPVfqKvvieRSiXwg&usqp=CAU"
          title="Email"
          sub="choikb916@gmail.com"
        />
      </a>
      <a href="https://github.com/jeanoza/" target="_blank" rel="noreferrer">
        <ImageSmall
          imageUrl="https://pngimg.com/uploads/github/github_PNG40.png"
          title="GitHub"
          sub="github.com/jeanoza/"
        />
      </a>
    </Section>
  </Present>
);
