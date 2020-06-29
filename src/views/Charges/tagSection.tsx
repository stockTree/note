import styled from "styled-components";
import React, { useState } from "react";

const Tag = styled.section`
    flex-grow: 1;
    background:#fff;
    padding: 6px;
    display:flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
      li{
        background: #eee;
        border-radius: 18px;
        display: inline-block;
        padding: 4px 18px;
        margin: 0 12px;
        font-size: 14px;
        &.selected {
        background: #6673dd;
        color:white;
        }
      }
      button{
        border: none;
        color:#333;
        background: none;
        border-bottom:1px solid #333;
        padding: 2px 4px;
        margin: 14px 0px 0px 12px;
        display: block;
    }
`
type Props = {
    value:string[],
    onChange: (tags:string[]) => void
}
const TagSection:React.FC<Props> = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    let selects = props.value
    const add = () => {
        const tagName = window.prompt("请输入你的名字")
        if (tagName !== null) {
            setTags([...tags,tagName])
        }
    }
    const toggleTag = (tag:string) => {
        if (selects.length > 0) {
            selects.filter((ele,index, self) => {
                if (self.indexOf(tag) === -1) {
                    props.onChange([...selects, tag])
                }
            })
        } else {
            selects.push(tag)
            props.onChange(selects)
        }
    }
    return (
        <Tag>
            <ol>
                {
                    tags.map((tag:string) =>
                        <li key={tag}
                            className={selects.indexOf(tag) >= 0 ? 'selected' : ''}
                            onClick={() => {toggleTag(tag)}}>{tag}
                        </li>
                    )
                }
            </ol>
            <button onClick={add}>新增标签</button>
        </Tag>
    )
}
export default TagSection