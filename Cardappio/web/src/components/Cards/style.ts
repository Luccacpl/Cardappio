import styled from 'styled-components'

import { colors } from '../../utils/colors'
import { dimensions } from '../../utils/dimensions'
import { fontsSizes } from '../../utils/fontSizes'

interface DivCardProps {
    gridStart?: string
}

interface DivPictureProps {

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
    width: 100%;
    height: 280px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 10px 20px rgba(191, 191, 191, 0.2);
    grid-column-start: ${props => props.gridStart}
    `

const DivPicture = styled.div<DivPictureProps>`
    height: 160px;
    width: 100%;
    background-color: grey;
    border-radius: 5px;
`

const DivMenu = styled.div<DivMenuProps>`
    width: 95px;
    height: 40px;
    background-color: #FE5B5B;
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
    color: #FE5B5B;
`

export { DivCard, DivPicture, DivMenu, DivDetail, TitleCard, DescriptionCard, PriceCard }