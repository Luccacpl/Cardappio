import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

interface SvgProps {
  width?: string
  height?: string
  maxWidth?: string
  display?: string
  margin?: string
  color?: string
  cursor?: string
  textAlign?: string
}

const Svg = styled(ReactSVG)<SvgProps>`
  svg {
    width: ${props => props.width};
    height: ${props => props.height};
    max-width: ${props => props.maxWidth};
    display: ${props => props.display};
    margin: ${props => props.margin};
    color: ${props => props.color};
    cursor: ${props => props.cursor};
    text-align: ${props => props.textAlign};
    }
`

export default Svg
