import styled from 'styled-components';

import { colors, dimensions, fontsSizes } from '../../utils'

interface DivProps {
    display?: string
    flexDirection?: string
    height?: string
    margin?: string
}

const Div = styled.div<DivProps>`
    width: 100%;
    height: ${props => props.height};
    background-color: ${colors.lightBlue};
    display: ${props => props.display};
    flex-direction: ${props => props.flexDirection};
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: ${props => props.margin};
    gap: 30px;
    padding: 64px;
`

export { Div }