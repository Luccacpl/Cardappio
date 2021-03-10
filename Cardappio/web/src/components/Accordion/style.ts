import styled from 'styled-components'
import { fontsSizes } from '../../utils'
import { colors } from '../../utils/colors'
import { dimensions } from '../../utils/dimensions'


interface AccordionSectionProps {

}

interface AccordionHeaderProps {

}

interface AccordionTitleProps {

}

interface AccordionButtonProps {

}

interface AccordionTextButtonsProps {

}

interface AccordionContentProps {

}

interface ContentProps {

}

interface ContentPictureProps {

}

const AccordionSection = styled.div<AccordionSectionProps>`
    width: 60%;
    height: 100%;
    background-color: white;
    display: inline-block;
    border: 1px solid #BD2323;
    border-radius: 5px;
    box-sizing: border-box;
    margin: auto;
`

const AccordionHeader = styled.div<AccordionHeaderProps>`
    display: flex;
    width: 100%;
    height: 70px;
    background-color: #fff;
    justify-content: space-between;
    border 1px solid grey
`
const AccordionTitle = styled.h1<AccordionTitleProps>`
    float: left;
    font-size: 3vh;
    color: #272727;
`

const AccordionButton = styled.button<AccordionButtonProps>`
    border: 0px solid transparent;
    background-color: transparent;
    float: right    ;
    cursor: pointer;
    text-decoration: underline;
    font-weight: 500;
    font-size: 16px;
    margin-top: 2.3%;
    color: #272727;
    outline: none;
`

const AccordionTextButtons = styled.p<AccordionTextButtonsProps>``

const AccordionContent = styled.div<AccordionContentProps>`
    width: 90%;
    height: 70px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    margin: auto;
    margin-top: 14px;
    margin-bottom: 14px;
`

const Content = styled.div<ContentProps>`
    width: 100%;
    height: 100%;
    border-top: none;

    background-color: #fff;
    display: flex;
`

const ContentPicture = styled.div<ContentPictureProps>`
    width: 32px;
    height: 32px;
    border: 2px solid black;
    margin-left: 10px;
    border-top: none;
    border-radius: 50%;
    border-bottom: none;
    border-left: none;
    background-color: white;
    float: left;
`





export { AccordionSection, AccordionHeader, AccordionTitle, AccordionButton, AccordionTextButtons, AccordionContent, Content, ContentPicture }