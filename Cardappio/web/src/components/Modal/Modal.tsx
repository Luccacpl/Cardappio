
import { colors, dimensions, fontsSizes } from '../../utils'
import { OverlayModal, MiddleContainer, Title, P, AsideBackButton } from './style'
import { Grid } from '../../components/Grid/style'
import { Input } from '../../components/Input/Input'

import Button from '../Button/Button'

import ArrowBack from '../../public/icons/arrow-back-outline.svg';

import Svg from '../Svg/Svg';

import { ChangeEventHandler } from 'react'

interface IBottomModal {
    clicked?: any
    Backclicked?: any
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
                <Grid grid="auto/ auto" gridGap="15% 5%" marginBottom="2%" marginTop="5%">
                    <Title
                        color={colors.pink}
                        fontWeight="700"
                    >
                        {props.title}
                    </Title>
                </Grid>
                <Grid grid="auto/ auto" gridGap="15% 5%" marginBottom="15%" justifyContent="center">
                    <P
                        fontWeight="400"
                        color={colors.textBlack}
                    >
                        {props.text}
                    </P>
                </Grid>
                <Grid grid="1fr/ auto" gridGap="50%">
                    <Input 
                        placeholder="Insira o nome da categoria" 
                        value={props.value} 
                        onChange={props.change}
                        width="100%"
                        margin="auto"
                        />
                </Grid>
                <Grid grid="1fr/ auto" gridGap="15% 5%" marginTop="10%"> 
                    <Button content={props.ButtonTitle} margin="auto" clicked={props.clicked} />
                </Grid>
                <Grid grid="1fr/ auto" gridGap="15% 5%" marginTop="15%" justifyContent="center">
                    <AsideBackButton marginTop="0px" onClick={props.Backclicked}>
                        <Svg src={ArrowBack} width="1.5rem" height="2rem" margin="auto" />
                    </AsideBackButton>
                </Grid>
                    {props.body}
            </MiddleContainer>
        </OverlayModal>
    )
}

export default BottomModal
