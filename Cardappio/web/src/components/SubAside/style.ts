import { Link } from 'react-router-dom';
import styled from 'styled-components'

import { colors } from '../../utils/colors'
import { dimensions } from '../../utils/dimensions'
import { fontsSizes } from '../../utils/fontSizes'

interface DivMenuContainerProps{
    height?: string
}

interface DivTitleProps{

}

interface TitleProps{
    marginLeft?: string
    paddingTop?: string
}

interface SubTitleProps{
    marginLeft?: string
    paddingTop?: string
}

interface SubMenuProps{

}

interface TitleSubMenuProps{
    marginLeft?: string
    paddingTop?: string
}

interface UlMenuProps{

}

interface LiMenuProps{

}

interface AddButtonProps{

}

interface LinkProps{
    
}

const DivContainer = styled.div<DivMenuContainerProps>`
    height: ${props => props.height || dimensions.heightFullWindow};
    background-color: ${colors.white};
    width: 100%;
    min-width: 300px;
`

const DivTitle = styled.div<DivTitleProps>`
    height: 24%;
    width: ${dimensions.widthFull};
    background-color: ${colors.menuBlue};
    @media(min-width: 1280px) {
        height: 19.3%
    }
    @media(min-width: 1440px) {
        height: 19.9%
    }
`

const Title = styled.h1<TitleProps>`
    font-size: ${fontsSizes.large24};
    font-weight: 500;
    color: ${colors.white};
    margin-left: ${props => props.marginLeft || dimensions.spacing40};
    padding-top: ${props => props.paddingTop || dimensions.spacing72};
    @media(min-width: 1280px) {
        font-size: ${fontsSizes.large28};
        padding-top: ${props => props.paddingTop || dimensions.spacing80};
    }
    @media(min-width: 1440px) {
        font-size: ${fontsSizes.large30};
        padding-top: ${props => props.paddingTop || dimensions.spacing80};
    }
`

const SubTitle = styled.p<SubTitleProps>`
    font-size: ${fontsSizes.small14};
    font-weight: light;
    color: ${colors.white};
    margin-left: ${props => props.marginLeft || dimensions.spacing40};
    @media(min-width: 1280px) {
        font-size: ${fontsSizes.large18};
    }
    @media(min-width: 1440px) {
        font-size: ${fontsSizes.large20};
    }
`

const SubMenu = styled.div<SubMenuProps>`
    width: ${dimensions.widthFull};
    height: 76%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
    @media(min-width: 1280px) {
        height: 80.7%
    }
    @media(min-width: 1440px) {
        height: 80.7%
    }

`

const TitleSubMenu = styled.h2<TitleSubMenuProps>`
    font-size: ${fontsSizes.large18};
    color: #4A4A4A;
    font-weight: 500;
    margin-left: ${props => props.marginLeft || dimensions.spacing40};
    padding-top: ${props => props.paddingTop || dimensions.spacing64};
    @media(min-width: 1280px) {
        font-size: ${fontsSizes.large20};
    }
    @media(min-width: 1440px) {
        font-size: ${fontsSizes.large24};
    }
`

const UlMenu = styled.ul<UlMenuProps>`
    list-style: none;
    margin-top: ${dimensions.spacing24};
    @media(min-width: 1280px) {
        margin-top: ${dimensions.spacing32};
    }
    @media(min-width: 1440px) {
        margin-top: ${dimensions.spacing40};
    }
`

const LiMenu = styled.li<LiMenuProps>`
    font-size: ${fontsSizes.small14};
    color: ${colors.orange};
    padding-left: ${dimensions.spacing40};
    margin-bottom: ${dimensions.spacing24};
    cursor: pointer;
    display: flex;
    @media(min-width: 1280px) {
        font-size: ${fontsSizes.large18};
    }
    @media(min-width: 1440px) {
        font-size: ${fontsSizes.large22};
    }
`

const AddButton = styled.button<AddButtonProps>`
    border: 0px;
    background-color: transparent;
    margin-left: ${dimensions.spacing40};
    color: #FF3838;
    font-size: ${fontsSizes.small14};
    cursor: pointer;
    outline: none;
    @media(min-width: 1280px) {
        font-size: ${fontsSizes.large18};
    }
    @media(min-width: 1440px) {
        font-size: ${fontsSizes.large22};
    }
`





export { DivContainer, DivTitle, Title, SubTitle, SubMenu, TitleSubMenu, UlMenu, LiMenu, AddButton }