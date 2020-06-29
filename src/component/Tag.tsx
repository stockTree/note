import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
const Wrap = styled.div`
  height:100vh;
  display:flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  flex-grow:1 ;
  overflow: hidden;
`
function Tag (props:any) {
    return (
        <Wrap>
            <Wrapper className={props.className}>
                {props.children}
            </Wrapper>
            <Nav />
        </Wrap>
    )
}
export default Tag