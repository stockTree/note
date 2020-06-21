import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NavWrap = styled.div`
  ul{
    display:flex;
    li{
        font-family: $font-hei;
        width: 33.33%;
        text-align: center;
        padding: 20px 0;
        border:1px solid #ccc ;
    }
  }
`
function Nav () {
    return (
        <NavWrap>
            <ul>
                <li>
                    <Link to="/label">标签页</Link>
                </li>
                <li>
                    <Link to="/charge">计数页</Link>
                </li>
                <li>
                    <Link to="/statistical">统计页</Link>
                </li>
            </ul>
        </NavWrap>
    )
}
export default Nav

