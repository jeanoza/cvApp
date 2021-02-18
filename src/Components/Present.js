import styled from "styled-components";
import Image from "Components/Image";
import ImageSmall from "Components/ImageSmall";

const Present = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  right: 18%;
  width: 22%;
`;

const SpanBig = styled.span`
  font-weight: 600;
  opacity: 0.7;
  margin: 20px 0px;
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default () => (
  <Present>
    <Image
      imageUrl="https://scontent-cdt1-1.xx.fbcdn.net/v/t31.0-8/17833942_1349547301803677_3715697971698721651_o.jpg?_nc_cat=103&ccb=3&_nc_sid=174925&_nc_ohc=WmcZDHOyqPsAX9N9LWZ&_nc_ht=scontent-cdt1-1.xx&oh=1fc264ebbcf7bdfe85f854276e3e695a&oe=60542999"
      title="Kyubong Choi"
      sub="Sud-Coréen, né 16 septembre 1991"
    />
    <Section>
      <SpanBig>Recherche d’un contrat d’apprentissage...</SpanBig>
      <ImageSmall
        imageUrl="https://cdn.auth0.com/blog/react-js/react.png"
        title="Front-End"
        sub="Javascript, ReactJS"
      />
      <ImageSmall
        imageUrl="https://www.contentside.com/wp-content/uploads/2015/01/spring-boot-logo.png"
        title="Full-Stack"
        sub="NodeJS, Java Spring Boot, MySQL"
      />
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
      <a href="https://github.com/jeanoza/" target="_blank">
        <ImageSmall
          imageUrl="https://pngimg.com/uploads/github/github_PNG40.png"
          title="GitHub"
          sub="github.com/jeanoza/"
        />
      </a>
    </Section>
  </Present>
);
