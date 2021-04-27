
import { colors } from '../../utils'
import { OverlayModal, RightContainer, CloseButton } from './style'
import { Title, P } from '../Text/text'

import { Close } from 'react-ionicons';

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
                    <Close color="white" width="30px" height="30px" />
                </CloseButton>
            </RightContainer>
        </OverlayModal>
    )
}

export default BottomModal