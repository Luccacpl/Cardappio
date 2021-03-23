import styled from 'styled-components';

import { colors, dimensions, fontsSizes } from '../../utils'

interface DivProps {
    display?: string
    flexDirection?: string
    height?: string
    margin?: string
    width?: string
    backgroundColor?: string
    padding?: string
    overflow?: string
    justifyContent?: string
    gap?: string
}

const Div = styled.div<DivProps>`
    width: ${props => props.width || "100%"};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor || colors.black};
    display: ${props => props.display};
    flex-direction: ${props => props.flexDirection};
    flex-wrap: wrap;
    justify-content: ${props => props.justifyContent || "space-evenly"};
    margin-top: ${props => props.margin};
    gap: ${props => props.gap || "30px"};
    padding: ${props => props.padding || '64px'};
    overflow-y: ${props => props.overflow || 'hidden'};
`

export { Div }