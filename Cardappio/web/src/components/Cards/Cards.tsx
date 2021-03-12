import React from 'react'

import EditSVG from '../../public/icons/create-outline.svg'
import TrashSVG from '../../public/icons/trash-outline.svg'

import Svg from '../Svg/Svg'

import { DivCard, DivPicture, DivMenu, DivDetail, TitleCard, DescriptionCard, PriceCard } from './style'

interface ICards {
    gridStart?: string
}

function Cards(props: ICards) {
    return (
        <DivCard gridStart={props.gridStart}>
            <DivPicture>
                <DivMenu>
                    <Svg src={EditSVG} width="3rem" height="1.5rem" margin="10% 0px" color="white"/>
                    <Svg src={TrashSVG} width="3rem" height="1.5rem" margin="10% 0px" color="white"/>
                </DivMenu>
            </DivPicture>
            <DivDetail>
                <TitleCard>Batata Frita</TitleCard>
                <DescriptionCard>Batata frita, cheddar e Bacon.</DescriptionCard>
                <PriceCard>R$ 10,00</PriceCard>
            </DivDetail>
        </DivCard>
    );
}

export default Cards;