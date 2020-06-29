import {NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";


const NavWrap = styled.div`
  background: #fff;
  ul{
      display:flex;
      li{
          font-family: $font-hei;
          width: 33.33%;
          text-align: center;
          border:1px solid #ccc ;
          a{
              font-size: 10px;
              padding: 6px 0;
              display:flex;
              flex-direction: column;
              align-items: center;
              &.selected {
                  color:red;
                  svg{
                    fill:red;
                  }
              }
              svg{
                  width: 26px;
                  height: 26px;
                  margin-bottom: 6px;
              }
          }
      }
  }
`
function Nav () {
    return (
        <NavWrap>
            <ul>
                <li>
                    <NavLink to="/label" activeClassName="selected">
                        <Icon name="tag"/>
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/charge" activeClassName="selected">
                        <Icon name="money"/>
                        计数页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistical" activeClassName="selected">
                        <Icon name="chart"/>
                        统计页
                    </NavLink>
                </li>
            </ul>
        </NavWrap>
    )
}
export default Nav

