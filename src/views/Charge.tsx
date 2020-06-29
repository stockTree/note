import Tag from "../component/Tag";
import React, { useState } from "react";
import styled from "styled-components";
import TagSection from 'views/Charges/tagSection'
import MarkSection from 'views/Charges/markSection'
import TabSection from 'views/Charges/tabSection'
import KeyboardSection from 'views/Charges/keyboardSection'
const Layout = styled(Tag)`
  display:flex;
  flex-direction: column;
`
type Tags= string[]
type Category = ('-' | '+')

function Charge() {
    const [selectedVal, setSelectedVal] = useState({
        tags: [] as Tags,
        note: '',
        category: '-' as Category,
        amount: '0'
    })
    const fn = (val:Partial<typeof selectedVal>) => {
        setSelectedVal({
            ...selectedVal,
            ...val
        })
    }
    return(
        <Layout>
            {selectedVal.category}
            {selectedVal.amount}
            <TagSection
                value = {selectedVal.tags}
                onChange={(tags:string[]) => {
                    fn({tags})
                }
            }
            />
            <MarkSection
                value={selectedVal.note}
                onChange={(note: string) => {
                    fn({note})
                    }
                }
            />
            <TabSection
                value={selectedVal.category}
                onChange={(category:Category) => {
                    fn({category})
                    }
                }
            />
            <KeyboardSection
                value={selectedVal.amount}

                onChange={(amount:string) => {
                    fn({amount})
                }
                }
            />
        </Layout>
    )
}
export default Charge