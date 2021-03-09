import styled from 'styled-components'
import { fontsSizes } from '../../utils'
import { colors } from '../../utils/colors'
import { dimensions } from '../../utils/dimensions'


interface CustomAsideProps {
    width?: string
    height?: string
    position?: string
    float?: string
    clear?: string
    borderRadius?: string
}

interface WrapperProps {
    margin?: string
    height?: string
    width?: string
    backgroundColor?: string
    borderRadius?: string
}

interface TitleProps {
    fontFamily?: string
    fontStyle?: string
    fontWeight?: string
    fontSize?: string
    color?: string;
    textAlign?: string
    marginTop?: string
}

interface ButtonWrapperProps {
    width?: string
    display?: string
    marginTop?: string
}

interface AsideButtonProps {
    $selected?: boolean
    children?: string
    width?: string
    height?: string
    backgroundColor?: string
    fontFamily?: string
    fontStyle?: string
    fontWeight?: string
    fontSize?: string
    color?: string
    textAlign?: string
    cursor?: string
    outline?: string
    border?: string;
    borderRadius?: string
}

const CustomAside = styled.aside<CustomAsideProps>`
    width: 300px;
    height: ${props => props.height || dimensions.heightFullWindow};

    position: relative;
    float: left;
    clear: right;

    border-radius: 0px 15px 15px 0px;
`

const Wrapper = styled.div<WrapperProps>`
    height: ${props => props.height || dimensions.heightFull};
    background-color: ${props => props.color || colors.lightRed};
    width: ${props => props.width || dimensions.widthFull};
    border-radius: 0px 15px 15px 0px;
    text-align: center;
`

const Title = styled.h1<TitleProps>`
    font-family: Quicksand;
    font-style: normal;
    font-weight: ${props => props.fontWeight || 'bold'};
    font-size: ${props => props.fontSize || fontsSizes.large40};

    color: ${props => props.color || colors.white};

    margin-top: ${props => props.marginTop || dimensions.spacing56};
`

const ButtonWrapper = styled.div<ButtonWrapperProps>`
    width: ${props => props.width || dimensions.widthFull};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: ${props => props.marginTop || '5.625rem'};
`

const AsideButton = styled.button<AsideButtonProps>`
    width: 85%;
    height: ${props => props.height || dimensions.spacing70};
    background-color: ${({ $selected }) =>
        $selected ? colors.white : colors.lightRed};
    margin-left: 15%;

    font-family: Roboto;
    font-style: normal;
    font-weight: ${({ $selected }) =>
        $selected ? 'bold' : '500'};
    font-size: ${props => props.fontSize || fontsSizes.large30};
    color: ${({ $selected }) =>
        $selected ? colors.lightRed : colors.white};
    text-align: left;
    padding-left: 24px;

    cursor: pointer;

    outline: none;

    border: 0px solid transparent;

    border-radius: 20px 0px 0px 20px;
`
//background-color: ${({ $selected }) => 
//        $selected ? colors.white : colors.lightRed};
export { CustomAside, Wrapper, Title, ButtonWrapper, AsideButton }