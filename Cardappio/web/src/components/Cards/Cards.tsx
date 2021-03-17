import React from 'react'

import EditSVG from '../../public/icons/create-outline.svg'
import TrashSVG from '../../public/icons/trash-outline.svg'

import Svg from '../Svg/Svg'

import { DivCard, DivPicture, DivMenu, DivDetail, TitleCard, DescriptionCard, PriceCard } from './style'

interface ICards {
    gridStart?: string
    display?: string
    width?: string
    marginLeft?: string
    name: string
    desc: string
    price: string
    src: string
    EditClicked?: any
    TrashClicked?: any
}

function Cards(props: ICards) {
    return (
        <DivCard
            gridStart={props.gridStart}
            display={props.display}
            width={props.width}
            marginLeft={props.marginLeft}
        >
            <DivPicture imgUrl={props.src}>
                <DivMenu>
                    <Svg
                        src={EditSVG}
                        width="3rem"
                        height="1.5rem"
                        margin="10% 0px"
                        color="white"
                        cursor="pointer"
                        onClick={props.EditClicked}
                    />
                    <Svg
                        src={TrashSVG}
                        width="3rem"
                        height="1.5rem"
                        margin="10% 0px"
                        color="white"
                        cursor="pointer"
                        onClick={props.TrashClicked}
                    />
                </DivMenu>
            </DivPicture>
            <DivDetail>
                <TitleCard>{props.name}</TitleCard>
                <DescriptionCard>{props.desc}</DescriptionCard>
                <PriceCard>{props.price}</PriceCard>
            </DivDetail>
        </DivCard>
    );
}

export default Cards;