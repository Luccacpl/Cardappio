import styled from 'styled-components'

import { colors, dimensions } from '../../utils'

interface TitleComponentProps {
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    textAlign?: string;
    lineHeight?: string;
}


interface PProps {
    float?: string
    lineHeight?: string
    fontSize?: string
    color?: string
    fontWeight?: string
    textTransform?: string
    backgroundColor?: string
    textAlign?: string
    padding?: string
    strongColor?: string
  }

const OverlayModal = styled.div`
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
`

const MiddleContainer = styled.div`
  width: 446px;
  width: 600px;
  height: 75%;
  background-color: ${colors.white};
  padding: ${dimensions.spacing40};
  box-sizing: border-box;
  border-radius: 5px 5px 0px 0px;
`

const Title = styled.h2<TitleComponentProps>`
    font-size: ${(props) => props.fontSize || "2.8em"};
    color: ${(props) => props.color || colors.textBlack};
    font-weight: ${(props) => props.fontWeight || "normal"};
    text-align: ${(props) => props.textAlign || "left"};
    line-height: ${(props) => props.lineHeight};
`

const P = styled.p<PProps>`
  display: block;
  float: ${props => props.float};
  line-height: ${props => props.lineHeight || '25px'};
  font-size: ${props => props.fontSize};
  color: ${props => props.color || '#2b2b2b'};
  font-weight: ${props => props.fontWeight};
  text-transform: ${props => props.textTransform};
  background-color: ${props => props.backgroundColor};
  text-align: ${props => props.textAlign};
  padding: ${props => props.padding};
  strong {
    font-weight: bold;
    color: ${props => props.strongColor};
  }
`

export default P


export { OverlayModal, MiddleContainer, Title, P }
