import styled from 'styled-components';

import Fundo from '../../Images/VectorBackground.png';

import { colors }from '../../utils/colors';
import { dimensions }from '../../utils/dimensions';

interface IContainrLeft {
    overflow?: string
}

const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: inline-flex;
`

const ContainerLeft = styled.div<IContainrLeft>`
    width: 33%;
    height: 100vh;
    background-color: ${colors.black};
    padding: 64px;
    overflow-y: ${props => props.overflow};
    ::-webkit-scrollbar {
    width: 0px;
}
`

const ContainerRight = styled.div`
    width: 67%;
    height: 100vh;
    background-color: ${colors.lightBlack};
    background-image: url(${Fundo});
    @media screen and (min-width: 1281px){
        background-repeat: no-repeat;
        background-size: cover;
    }
`

const BtnDiv = styled.div`
    width: 100%;
    height: 60px;
    display: inline-flex;
`

const Linha = styled.hr`
    width: 100%;
    border: 1px solid ${colors.textBlack};
    margin-top: 46px;
`

export { Body, ContainerLeft, ContainerRight, BtnDiv, Linha }