import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faHome,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";

const Header = styled.div`
  z-index: 12;
  background-color: rgb(255, 255, 255);
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100vw;
  font-weight: 600;
  height: 50px;
  border-bottom: 1px solid rgb(20, 20, 20, 0.1);
  padding: 0px 18vw;

  min-width: 320px;
  @media (max-width: 1024px) {
    right: 0;
    padding: 0 1vw;
    width: 100%;
    min-width: 900px;
  }
`;

const Title = styled.div`
  font-size: 20px;
`;
const Input = styled.input`
  all: unset;
  &::placeholder {
    text-align: center;
    opacity: 0.5;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 25px;
  font-weight: 400;
  border: 1px solid rgb(20, 20, 20, 0.1);
  background-color: rgb(250, 250, 250);
  border-radius: 5px;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  font-size: 20px;
  font-weight: 700;

  border-bottom: 3px solid
    ${(props) => (props.current ? "#0984e3" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  color: ${(props) => (props.current ? "#0984e3" : "rgba(20,20,20,0.7)")};
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Link to="/">
      <Title>𝕮𝖚𝖗𝖗𝖎𝖈𝖚𝖑𝖚𝖒 𝖁𝖎𝖙𝖆𝖊</Title>
    </Link>
    <Form>
      <Input placeholder="Rechercher" />
    </Form>
    <List>
      <Item current={pathname === "/"}>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="1x" />
        </Link>
      </Item>
      <Item current={pathname === "/profession"}>
        <Link to="/profession">
          <FontAwesomeIcon icon={faUserTie} size="1x" />
        </Link>
      </Item>
      <Item current={pathname === "/formation"}>
        <Link to="/formation">
          <FontAwesomeIcon icon={faGraduationCap} size="1x" />
        </Link>
      </Item>
      <Item current={pathname === "/project"}>
        <Link to="/project">
          {/* <FontAwesomeIcon icon={faJsSquare} size="2x" /> */}
          {"</>"}
        </Link>
      </Item>
    </List>
  </Header>
));
