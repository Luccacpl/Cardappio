import { CreateOutline, TrashOutline } from 'react-ionicons'

import { DivCard, DivPicture, DivMenu, DivDetail, TitleCard, DescriptionCard, PriceCard } from './style'

interface ICards {
    gridStart?: string
    display?: string
    width?: string
    marginLeft?: string
    margin?: string
    name?: string
    desc?: string
    price?: string
    src?: string
    EditClicked?: any
    TrashClicked?: any
}

function CommandCards(props: ICards) {
    return (
        <DivCard
            display={props.display}
            width={props.width}
            marginLeft={props.marginLeft}
            margin={props.margin}
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
            <DivDetail>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <TitleCard color="white">{props.name}</TitleCard>
                    <PriceCard>{props.price}</PriceCard>
                </div>
                <DescriptionCard>
                    {props.desc}
                </DescriptionCard>
            </DivDetail>
        </DivCard>
    );
}

export default CommandCards;