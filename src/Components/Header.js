import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGraduationCap,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  z-index: 10;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0px;
  right: 0px;
  width: 100%;
  font-weight: 600;
  height: 51px;
  border-bottom: 1px solid rgb(20, 20, 20, 0.1);
  padding: 0px 18%;
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

  border-bottom: 3px solid
    ${(props) => (props.current ? "#3742fa" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
      </Item>
      <Item current={pathname === "/formation"}>
        <Link to="/formation">
          <FontAwesomeIcon icon={faGraduationCap} size="2x" />
        </Link>
      </Item>
      <Item current={pathname === "/informatique"}>
        <Link to="/informatique">
          <FontAwesomeIcon icon={faWrench} size="2x" />
        </Link>
      </Item>
    </List>
  </Header>
));
