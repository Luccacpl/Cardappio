
import { colors, dimensions, fontsSizes } from '../../utils'
import { OverlayModal, MiddleContainer, Title, P } from './style'
import { Grid }  from '../../components/Grid/style'
import { Input } from '../../components/Input/Input'
import Button from '../Button/Button'
import { ChangeEventHandler } from 'react'

interface IBottomModal {
    clicked?: any
    title?: string
    text?: string
    body?: React.ReactNode
    icon?: any
    ButtonTitle?: string
    value?: string
    change?: ChangeEventHandler<HTMLInputElement>
}

const BottomModal = (props: IBottomModal) => {
    return (
        <OverlayModal>
            <MiddleContainer>
                    <Title
                        color={colors.textBlack}
                        fontWeight="700"
                        fontSize={fontsSizes.large24}
                    >
                        {props.title}
                    </Title>
                    <P
                        fontWeight="300"
                        color={colors.textBlack}
                        fontSize={fontsSizes.small14}
                    >
                        {props.text}
                    </P>
                    <Input placeholder="Insira o nome da categoria" value={props.value} onChange={props.change}/>
                    <Button content={props.ButtonTitle} margin="auto" clicked={props.clicked}/>
                {props.body}
            </MiddleContainer>
        </OverlayModal>
    )
}

export default BottomModal
