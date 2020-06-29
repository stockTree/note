import Tag from "../component/Tag";
import React from "react";
import styled from "styled-components";

const TagSection = styled.section`

`
const MarkSection = styled.section`

`
const TabSection = styled.section`

`
const InputSection = styled.section`

`
const KeyboardSection = styled.section`

`
function Statistical() {
    return(
        <Tag>
            <TagSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagSection>
            <MarkSection>
                <span>备注</span>
                <input type="text" placeholder="在这里添加备注"/>
            </MarkSection>
            <TabSection>
                <span>支出</span>
                <span>收入</span>
            </TabSection>
            <InputSection>
                100
            </InputSection>
            <KeyboardSection>
                <ol>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>删除</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>清空</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>.</li>
                </ol>
            </KeyboardSection>
        </Tag>
    );
}
export default Statistical