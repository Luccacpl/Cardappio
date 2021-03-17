import styled from 'styled-components'

import { colors } from '../../utils/colors'
import { dimensions } from '../../utils/dimensions'
import { fontsSizes } from '../../utils/fontSizes'

interface DivCardProps {
    gridStart?: string
    display?: string
    width?: string
    marginLeft?: string
}

interface DivPictureProps {
    imgUrl?: string
}

interface DivMenuProps {

}

interface DivDetailProps {

}

interface TitleCardProps {

}

interface DescriptionCardProps {

}

interface PriceCardProps {

}

const DivCard = styled.div<DivCardProps>`
    width: 30%;
    min-width: 210px;
    max-height: 300px;
    background-color: ${colors.lightBlack};
    border-radius: 5px;
    grid-column-start: ${props => props.gridStart};
    display: ${props => props.display};
    margin-left: ${props => props.marginLeft};
    @media(min-width: 1280px) {
        width: 220px;
        width: 22.5%;
        height: 280px;
        height: 33%;
    }
    `

const DivPicture = styled.div<DivPictureProps>`
    height: 160px;
    width: 100%;
    background-color: grey;
    border-radius: 5px;
    background: url(${(props)=>props.imgUrl});
    background-position: center;
    background-size: cover;
`

const DivMenu = styled.div<DivMenuProps>`
    width: 95px;
    height: 40px;
    background-color: ${colors.menuOrange};
    border-radius: 0px 5px 0px 10px;
    float: right;
    top: 0;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    display: flex;
`

const DivDetail = styled.div<DivDetailProps>`
    height: 120px;
    width: ${dimensions.widthFull};
`

const TitleCard = styled.h2<TitleCardProps>`
    font-size: ${fontsSizes.medium16};
    font-weight: bold;
    margin-left: ${dimensions.spacing18};
    margin-top: ${dimensions.spacing20};
    color: ${colors.white};
`

const DescriptionCard = styled.p<DescriptionCardProps>`
    font-size: ${fontsSizes.small12};
    font-weight: 500;
    margin-left: ${dimensions.spacing18};
    margin-top: ${dimensions.spacing12};
    color: #888888;
    `

const PriceCard = styled.h1<PriceCardProps>`
    font-size: ${fontsSizes.large24};
    font-weight: bold;
    margin-left: ${dimensions.spacing18};
    margin-top: ${dimensions.spacing12};
    color: ${colors.green};
`

export { DivCard, DivPicture, DivMenu, DivDetail, TitleCard, DescriptionCard, PriceCard }