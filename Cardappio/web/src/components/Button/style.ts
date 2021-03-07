import styled from 'styled-components'
import { fontsSizes } from '../../utils'
import {colors} from '../../utils/colors'

interface CustomButtonProps {
    margin?: string
    height?: string
    width?: string
    color?: string
    fontWeight?: string
    fontSize?: string
    backgroundColor?: string
}

const CustomButton = styled.button<CustomButtonProps>`
    margin: ${props => props.margin};
    height: ${(props) => props.height || '3rem'};
    padding: 0 20px;

    background-color: ${props => props.color || colors.lighterRed};

    color: ${props => props.color || colors.white};

    border: 1px solid #888888;
    border-radius: 5px;

    outline: none;

    font-weight: ${props => props.fontWeight || 'bold'};
    font-size: ${props => props.fontSize || fontsSizes.large26};

    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
    }
`

export default CustomButton