
import { colors, dimensions, fontsSizes } from '../../utils'
import { OverlayModal, RightContainer, CloseButton } from './style'
import { Title, P } from '../Text/text'
import { Grid } from '../../components/Grid/style'
import { Input } from '../../components/Input/Input'

import Button from '../Button/Button'

import CloseSvg from '../../public/icons/close-outline.svg';

import Svg from '../Svg/Svg';

import { ChangeEventHandler } from 'react'

interface IBottomModal {
    children?: React.ReactNode
    clicked?: any
    closeClicked?: any
    title?: string
    text?: string
    icon?: any
    ButtonTitle?: string
    value?: string
    change?: ChangeEventHandler<HTMLInputElement>
}

const BottomModal = (props: IBottomModal) => {
    return (
        <OverlayModal>
            <RightContainer>
                <Title
                    color={colors.green}
                >
                    {props.title}
                </Title>
                <P
                    color={colors.white}
                    marginTop="12px"
                >
                    {props.text}
                </P>
                {props.children}
                <CloseButton onClick={props.closeClicked}>
                    <Svg  color="white" src={CloseSvg}/>
                </CloseButton>
            </RightContainer>
        </OverlayModal>
    )
}

export default BottomModal