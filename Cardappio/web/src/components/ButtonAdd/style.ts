import styled from 'styled-components'

import {colors} from '../../utils/colors'
import {dimensions} from '../../utils/dimensions'
import {fontsSizes} from '../../utils/fontSizes'

interface IDivAddCategory{
    width?: string
    height?: string
    border?: string
}

interface IDivBtnCategory{
    backgroundColor?: string
    width?: string
    height?: string
}

interface IDivPlus{
    width?: string
    height?: string
    float?: string
    clear?: string
}

interface IText{
    color?: string
    fontSize?: string
    fontWeight?: string
    textDecoration?: string
    marginTop?: string
}

const DivAddCategory = styled.div<IDivAddCategory>`
    width: 70vw;
    height: ${props => props.height || dimensions.spacing70};
    border: 1px solid black;
    border-radius: 5px;
`

const DivBtnCategory = styled.div<IDivBtnCategory>`
    background-color: ${props => props.backgroundColor || colors.white};
    border: 1px solid transparent;
    border-radius: 5px;

    width: 15vw;
    height: ${props => props.height || dimensions.heightFull};
`

const DivPlus = styled.div<IDivPlus>`
    width: 25%;
    height: ${props => props.height || dimensions.heightFull};

    float: left;
    clear: right;
`

const Text = styled.p<IText>`
    color: ${props => props.color || colors.lighterRed};
    font-size: ${props => props.fontSize || fontsSizes.large18};
    font-weight: ${props => props.fontWeight || 'bold'};
    text-decoration: underline;

    margin-top: ${props => props.marginTop || dimensions.spacing20};
`

export { DivAddCategory, DivBtnCategory, DivPlus, Text}
