import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import './index.scss'
import Nav from "./component/Nav";

const Wrap = styled.div`
  height:100vh;
  display:flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  flex-grow:1 ;
  overflow: hidden;
`

export default function App() {
  return <Router>
    <div>
      <Wrap>
        <Wrapper>
          <Switch>
            <Route path="/label">
              <Label/>
            </Route>
            <Route path="/charge">
              <Charge/>
            </Route>
            <Route path="/statistical">
              <Statistical/>
            </Route>
            <Redirect exact to="/charge" />
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Wrapper>
        <Nav />
      </Wrap>
    </div>
  </Router>;
}

function Label() {
  return <h2>标签页</h2>;
}

function Charge() {
  return <h2>记账页</h2>;
}
function Statistical() {
  return <h2>统计页</h2>;
}
function NoMatch() {
  return <h2>您找的页面不存在</h2>;
}
