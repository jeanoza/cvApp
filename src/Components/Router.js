import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Resume from "Routes/Resume";
import Informatique from "Routes/Informatique";
import Formation from "Routes/Formation";
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
        <Route path="/" exact component={Resume} />
        <Route path="/formation" exact component={Formation} />
        <Route path="/informatique" exact component={Informatique} />
        <Redirect from="*" to="/" />
      </Switch>
    </Container>
  </Router>
);
