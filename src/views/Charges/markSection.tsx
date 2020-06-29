import styled from "styled-components";
import React from "react";

const Wrap = styled.section`
  label {
    display:flex;
    align-items: center;
    font-size: 14px;
    span {
      margin: 0px 16px;
      white-space: nowrap;
      display: inline-block;
    }
    input {
      height: 72px;
      width: 100%;
      border: none;
      background: none;
    }
  }
`
type Props = {
    value: string,
    onChange: (note:string) => void
}
const MarkSection:React.FC<Props> = (props) => {
    let note = props.value
    const getVal = (e:React.ChangeEvent<HTMLInputElement>) => {
        let val:string = e.target.value
        if (val) {
            note = val
            props.onChange(val)
        }
    }
    return (
        <Wrap>
            <label>
                <span>备注</span>
                <input
                    value={note}
                    onChange={(e) => {getVal(e)}}
                    type="text"
                    placeholder="在这里添加备注"
                />
            </label>
        </Wrap>
    )
}
export default MarkSection
