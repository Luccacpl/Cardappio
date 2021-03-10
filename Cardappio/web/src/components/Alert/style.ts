import { MdDone } from 'react-icons/md';
import styled from 'styled-components'

import {colors} from '../../utils/colors'
import {dimensions} from '../../utils/dimensions'
import {fontsSizes} from '../../utils/fontSizes'

interface IDivAlert {
    width?: string
    height?: string
    marginLeft?: string
    backgroundColor?: string
}

interface IAlertText {
    fontWeight?: string
    fontSize?: string
    marginLeft?: string
    paddingTop?: string
}

interface IAlertCircle {
    width?: string
    height?: string
    backgroundColor?: string
    marginTop?: string
    marginRight?: string
}

const DivAlert = styled.div<IDivAlert>`
    width: 458px;
    height: 3.75rem;
    border-radius: 0px 0px 5px 5px;
    background-color: ${props => props.backgroundColor || colors.greenAlert};
    margin-left: 800px;
    margin-left: 27.5%;
    margin-left: 44.1%;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.4));
`

const AlertText = styled.p<IAlertText>`
    font-weight: ${props => props.fontWeight || '500'};
    color: ${props => props.color || colors.white};
    font-size: ${props => props.fontSize || fontsSizes.large18};
    font-family: 'Roboto';
    margin-left: ${props => props.marginLeft || dimensions.spacing24};
    padding-top: ${props => props.paddingTop || dimensions.spacing18};
    float: left;
    clear: right;
`

const AlertCircle = styled.button<IAlertCircle>`
    width: 32px;
    height: 32px;
    background-color: ${props => props.backgroundColor || colors.white};
    border-radius: 50%;
    float: right;
    margin-right: ${props => props.marginRight || dimensions.spacing24};
    margin-top: ${props => props.marginTop || dimensions.spacing14};
    border: 0px transparent;
    outline: none;
    cursor: pointer;
`


export {DivAlert, AlertText, AlertCircle}