import styled from 'styled-components'

import { colors, dimensions, fontsSizes } from '../../utils'

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

interface AsideBackButtonProps {
  marginTop?: string
}

const OverlayModal = styled.div`
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
`

const MiddleContainer = styled.div`
  width: 356px;
  width: 28.5%;
  min-width: 300px;
  height: 75%;
  background-color: ${colors.white};
  padding: ${dimensions.spacing40};
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
    @media(min-width: 1280px) {
        width: 446px;
    }`

const Title = styled.h2<TitleComponentProps>`
    font-size: ${(props) => props.fontSize || fontsSizes.large20};
    color: ${(props) => props.color || colors.textBlack};
    font-weight: ${(props) => props.fontWeight || "normal"};
    text-align: ${(props) => props.textAlign || "left"};
    line-height: ${(props) => props.lineHeight};
    @media(min-width: 1280px) and (max-width: 1440px) {
      font-size: ${props => props.fontSize || fontsSizes.large26};
    }
    @media(min-width: 1441px) {
      font-size: ${props => props.fontSize || fontsSizes.large26};
    }
`

const P = styled.p<PProps>`
  display: block;
  float: ${props => props.float};
  line-height: ${props => props.lineHeight || '25px'};
  font-size: ${props => props.fontSize || fontsSizes.small14};
  color: ${props => props.color || '#2b2b2b'};
  font-weight: ${props => props.fontWeight};
  text-transform: ${props => props.textTransform};
  background-color: ${props => props.backgroundColor};
  text-align: ${props => props.textAlign};
  padding: ${props => props.padding || "16px 0px 0px 0px"};
  strong {
    font-weight: bold;
    color: ${props => props.strongColor};
  }
  @media(min-width: 1280px) and (max-width: 1440px) {
    font-size: ${props => props.fontSize || fontsSizes.medium16};
  }
  @media(min-width: 1441px) {
    font-size: ${props => props.fontSize || fontsSizes.medium16};
  }
  `

  const AsideBackButton = styled.button<AsideBackButtonProps>`
  width: 35px;
  height: 35px;
  background-color: #FF3838;
  border-radius: 5px;
  cursor: pointer;
  border: 0px;
  outline: none;
  margin-top: ${props => props.marginTop || '20rem'};
  color: white;
      @media(min-width: 1280px) {
          margin-top: ${props => props.marginTop || '25rem'};
  }
  @media(min-width: 1440px) {
      margin-top: ${props => props.marginTop || '35rem'};
  }
  &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
  }
`


export { OverlayModal, MiddleContainer, Title, P, AsideBackButton }
