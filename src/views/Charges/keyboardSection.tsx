import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  p{
      font-size: 36px;
      line-height: 64px;
      text-align: right;
      padding: 4px;
      background: #fff;
  }
  >div{
      button{
          width: 25%;
          border: none;
          display: inline-block;
          line-height: 64px;
          text-align: center;
          &:nth-child(1){
            background: #f5f5f5;
          }
          &:nth-child(2),
          &:nth-child(5){
            background: #e5e5e5;
          }
          &:nth-child(3),
          &:nth-child(6),
          &:nth-child(9){
            background: #d5d5d5;
          }
          &:nth-child(4),
          &:nth-child(7),
          &:nth-child(10){
            background: #c5c5c5;
          }
          &:nth-child(13){
            width: 50%;
            background: #bbb;
          }
          &:nth-child(8),
          &:nth-child(11){
            background: #ccc;
          }
          &:nth-child(12){
            background: #aaa;
            line-height: 128px;
            float: right;
          }
          &:nth-child(14){
            background: #afafaf;
          }
      }
      
  }
`
type Props = {
    value:string,
    onChange: (amount:string) => void
}
const KeyboardSection:React.FC<Props> = (props) => {
    let texts = props.value
    const setTexts=(texts:string) => {
        if(texts.length > 16) {
            texts = texts.slice(0,16)
        } else if (texts.length === 0) {
            texts = '0'
        }
        props.onChange(texts)
    }
    const getBtn = (e:React.MouseEvent<HTMLDivElement>) => {
        let text = (e.target as HTMLTextAreaElement).textContent
        if (!text) {
            return
        } else {
            switch(text) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    if (texts === '0') {
                      setTexts(text)
                    } else {
                        setTexts(texts +text)
                    }
                    break;
                case '删除':
                    if (texts.length >0) {
                        setTexts(texts.slice(0,-1))
                    } else {
                        setTexts('')
                    }
                    break;
                case '清空':
                    setTexts('')
                    break;
                case 'ok':
                    break;
                case '.':
                    if (texts.indexOf(text)=== -1) {
                        setTexts(texts + text)
                    } else {
                        return
                    }
                    break;
                default:
                    return '';
            }

        }
    }
    return (
        <Wrap>
            <p>
                {texts}
            </p>
            <div onClick={(e) => {getBtn(e)}}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>ok</button>
                <button>0</button>
                <button>.</button>
            </div>
        </Wrap>
    )
}
export default KeyboardSection
