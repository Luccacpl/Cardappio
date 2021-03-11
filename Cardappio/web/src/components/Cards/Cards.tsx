import React from 'react'

import { DivCard, DivPicture, DivMenu, DivDetail, TitleCard, DescriptionCard, PriceCard } from './style'

interface ICards {

}

function Cards(props: ICards) {
    return (
        <DivCard>
            <DivPicture>
                <DivMenu></DivMenu>
            </DivPicture>
            <DivDetail>
                <TitleCard>Batata Frita</TitleCard>
                <DescriptionCard>Batata frita, cheddar e Bacon.</DescriptionCard>
                <PriceCard>R$ 20,00</PriceCard>
            </DivDetail>
        </DivCard>
    );
}

export default Cards;