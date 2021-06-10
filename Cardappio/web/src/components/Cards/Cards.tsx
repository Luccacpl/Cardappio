import { CreateOutline, TrashOutline } from 'react-ionicons'

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
    bgColor?: any
}

function Cards(props: ICards) {
    return (
        <DivCard
            display={props.display}
            width={props.width}
            marginLeft={props.marginLeft}
        >
            <DivPicture imgUrl={props.src}>
                <DivMenu>
                    <CreateOutline
                        color="white"
                        width="3rem"
                        height="1.5rem"
                        style={{ margin: "10% 0px", cursor: "pointer" }}
                        onClick={props.EditClicked}
                    />
                    <TrashOutline
                        color="white"
                        width="3rem"
                        height="1.5rem"
                        style={{ margin: "10% 0px", cursor: "pointer" }}
                        onClick={props.TrashClicked}
                    />
                </DivMenu>
            </DivPicture>
            <DivDetail bgColor={props.bgColor}>
                <TitleCard>{props.name}</TitleCard>
                <DescriptionCard>{props.desc}</DescriptionCard>
                <PriceCard>{props.price}</PriceCard>
            </DivDetail>
        </DivCard>
    );
}

export default Cards;