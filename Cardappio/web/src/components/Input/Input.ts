import styled from 'styled-components'

import { colors } from '../../utils/colors'
import { dimensions } from '../../utils/dimensions'
import { fontsSizes } from '../../utils/fontSizes'

interface IInput {
    backgroundColor?: string
    width?: string
    height?: string
    fontWeight?: string
    fontSize?: string
    marginLeft?: string
    marginTop?: string
    margin?: string
}

const Input = styled.input<IInput>`
    background-color: ${props => props.backgroundColor || colors.white};
    outline: none;
    border: 1.5px solid #BEBEBE;
    border-radius: 5px;
    width: ${props => props.width || '73.5%'};
    height: ${props => props.height || '56px'};
    font-family: Roboto;
    font-style: normal;
    font-weight: ${props => props.fontWeight || '500'};
    font-size: ${props => props.fontSize || fontsSizes.large24};
    color: rgba(0, 0, 0, 0.7);
    padding: 0 24px;
    display: flex;
    margin-left: ${props => props.marginLeft};
    margin-top: ${props => props.marginTop};
    margin: ${props => props.margin};
    &:focus {
        border: 1.5px solid ${colors.darkRed};
        box-shadow: 0px 0px 25px rgba(176, 0, 0, 0.15);
        transition: 0.2s;
    }
`



export { Input }