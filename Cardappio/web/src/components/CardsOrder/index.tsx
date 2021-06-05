import { AlarmOutline, CloseCircleOutline, CheckmarkCircleOutline } from 'react-ionicons'

import { DivCard, DivPicture, DivMenu, DivDetail, TitleCard, DescriptionCard, Circle } from './style'

interface ICards {
  gridStart?: string
  display?: string
  width?: string
  marginLeft?: string
  margin?: string
  name?: string
  desc?: string
  src?: string
  checkClicked?: any
  AlarmClicked?: any
  TrashClicked?: any
  TableNumber?: any
}

function OrderCards(props: ICards) {
  return (
    <DivCard
      display={props.display}
      width={props.width}
      marginLeft={props.marginLeft}
      margin={props.margin}
    >
      <DivPicture imgUrl={props.src}>
        <Circle style={{ marginLeft: "10px", marginTop: "5px" }} >
          <TitleCard style={{ color: "white" }}>{props.TableNumber}</TitleCard>
        </Circle>
        <DivMenu>
          <CheckmarkCircleOutline
            color="white"
            width="3rem"
            height="1.5rem"
            style={{ margin: "10% 0px", cursor: "pointer" }}
            onClick={props.checkClicked}
          />
          <AlarmOutline
            color="white"
            width="3rem"
            height="1.5rem"
            style={{ margin: "10% 0px", cursor: "pointer" }}
            onClick={props.AlarmClicked}
          />
          <CloseCircleOutline
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
        </div>
        <DescriptionCard>
          {props.desc}
        </DescriptionCard>
      </DivDetail>
    </DivCard>
  );
}

export default OrderCards;