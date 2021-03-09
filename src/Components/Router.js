import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Resume from "Routes/Resume";
import Project from "Routes/Project";
import Formation from "Routes/Formation";
import Profession from "Routes/Profession";
import Admin from "Routes/Admin";
import Header from "Components/Header";
import Present from "Components/Present";
import styled from "styled-components";

const Container = styled.div`
  width: 66%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export default () => (
  <Router>
    <Container>
      <Header />
      <Present />
      <Switch>
        <Route exact path="/">
          <Resume />
        </Route>
        <Route path="/profession" exact>
          <Profession />
        </Route>
        <Route path="/formation" exact>
          <Formation />
        </Route>
        <Route path="/project" exact>
          <Project />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Container>
  </Router>
);
