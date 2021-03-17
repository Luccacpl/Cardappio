import styled from 'styled-components';

import { colors } from '../../utils/colors'
import { dimensions } from '../../utils/dimensions'
import { fontsSizes } from '../../utils/fontSizes'

interface IP {
    fontSize?: string
    color?: string
    fontWeight?: string
    marginTop?: string
    marginLeft?: string
    textAlign?: string
}

interface ITitle {
    fontSize?: string
    color?: string
    fontWeight?: string
    marginTop?: string
    marginLeft?: string
    fontFamily?: string
}

const P = styled.p<IP>`
    font-size: ${props => props.fontSize || fontsSizes.small14};
    color: ${props => props.color || colors.textBlack};
    font-weight: ${props => props.fontWeight || '400'};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    text-align: ${props => props.textAlign}
`

const Title = styled.h1<ITitle>`
    font-family: ${props => props.fontFamily};
    font-size: ${props => props.fontSize || fontsSizes.large24};
    color: ${props => props.color || colors.textBlack};
    font-weight: ${props => props.fontWeight || '500'};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
`

const SubTitle = styled.h1<ITitle>`
    font-size: ${props => props.fontSize || fontsSizes.large20};
    color: ${props => props.color || colors.textBlack};
    font-weight: ${props => props.fontWeight || '500'};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
`

export { P, Title, SubTitle }