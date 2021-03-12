
import { colors, dimensions, fontsSizes } from '../../utils'
import { OverlayModal, MiddleContainer, Title, P } from './style'
import { Grid } from '../../components/Grid/style'
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
                <Grid grid="0.5fr/ auto" gridGap="15% 5%" marginTop="2%">
                    <Title
                        color={colors.textBlack}
                        fontWeight="700"
                        fontSize={fontsSizes.large24}
                    >
                        {props.title}
                    </Title>
                </Grid>
                <Grid grid="1fr 1fr/ auto" gridGap="15% 5%" marginTop="2%">
                    <P
                        fontWeight="300"
                        color={colors.textBlack}
                        fontSize={fontsSizes.small14}
                    >
                        {props.text}
                    </P>
                </Grid>
                <Grid grid="1fr/ auto" gridGap="15% 5%" marginTop="2%">
                    <Input placeholder="Insira o nome da categoria" value={props.value} onChange={props.change}/>
                </Grid>
                <Grid grid="1fr/ auto" gridGap="15% 5%" marginTop="2%">
                    <Button content={props.ButtonTitle} margin="" clicked={props.clicked} />
                </Grid>
                    {props.body}
            </MiddleContainer>
        </OverlayModal>
    )
}

export default BottomModal
