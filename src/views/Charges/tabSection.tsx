import styled from "styled-components";
import React, { useState } from "react";

const Wrap = styled.section`
  ol{
    background: #c4c4c4;
    font-size: 24px;
    display:flex;
    li {
      width:50%;
      text-align: center;
      position: relative;
      padding: 16px 0;
      &.selected::after{
        background:#000;
        height: 3px;
        width: 100%;
        left: 0;
        content: '';
        position: absolute;
        bottom: 0px;
      }
    }
  }
`
type Category = ('-' | '+')
type Props = {
    value: Category,
    onChange: (category:Category) => void
}
const TabSection:React.FC<Props> = (props) => {
    const tabMap ={'+': '收入', '-': '支出'}
    const [tabs] = useState<('-'|'+')[]>(['-', '+'])
    const tab = props.value
    const toggle = (item:'+'|'-') => {
        props.onChange(item)
    }
    return (
        <Wrap>
            <ol>
                {tabs.map((items:'+'|'-') => (<li
                    key={items}
                    className={tab === items ? 'selected' : ''}
                    onClick={() => {toggle(items)}}>{tabMap[items]}
                </li>)
                )}
            </ol>
        </Wrap>
    )};
export default TabSection