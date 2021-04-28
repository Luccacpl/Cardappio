import { useState, useEffect } from 'react'
import Aside from '../../components/Aside/Aside'
import SubAside from '../../components/SubAside/SubAside'
import Container from '../../components/Container/Container'
import { Grid } from '../../components/Grid/style'
import { Title, P } from '../../components/Text/text'
import { Linha } from '../../components/Linha/style'
import CardsCommand from '../../components/CardsCommand/index'

import Button from '../../components/Button/Button'


import { TableWithTabs, Body, TabsContainer } from './style'

import { LiMenu } from '../../components/SubAside/style'

import { ClipboardOutline} from 'react-ionicons'

interface IMesas {
  name: string,
  id: number
}

interface IItems {
  name: string,
  id: number,
  desc: string,
  price: string,
}


function Comandas() {
  const [tables, setTables] = useState<IMesas[]>([])
  const [items, setItems] = useState<IItems[]>([])
  const [countItems, setCountItems] = useState(0)

  useEffect(() => {
    const mesas: IMesas[] = [
      {
        id: 0,
        name: "Comanda 1"
      },
      {
        id: 1,
        name: "Comanda 2"
      },
      {
        id: 2,
        name: "Comanda 3"
      },
      {
        id: 3,
        name: "Comanda 4"
      },
    ]

    const itens: IItems[] = [
      {
        id: 0,
        name: "Batata Frita",
        price: "R$ 20,00",
        desc: "batata frita, cheddar e bacon",
      },
      {
        id: 1,
        name: "Batata Frita",
        price: "R$ 20,00",
        desc: "batata frita, cheddar e bacon",
      },
      {
        id: 2,
        name: "Batata Frita",
        price: "R$ 20,00",
        desc: "batata frita, cheddar e bacon",
      },
      {
        id: 3,
        name: "Batata Frita",
        price: "R$ 20,00",
        desc: "batata frita, cheddar e bacon",
      },
      {
        id: 4,
        name: "Batata Frita",
        price: "R$ 20,00",
        desc: "batata frita, cheddar e bacon",
      },
      {
        id: 5,
        name: "Batata Frita",
        price: "R$ 20,00",
        desc: "batata frita, cheddar e bacon",
      },
      {
        id: 6,
        name: "Batata Frita",
        price: "R$ 20,00",
        desc: "batata frita, cheddar e bacon",
      },
      {
        id: 7,
        name: "Batata Frita",
        price: "R$ 20,00",
        desc: "batata frita, cheddar e bacon",
      },
    ]

    setCountItems(mesas.length)
    setItems(itens)
    setTables(mesas)
  }, [])


  return (
    <Grid>
      <Aside />
      <SubAside
        items={tables}
        title="Gerenciamento de Comandas"
        addButtonText="+ Adicionar nova comanda"
      >
        {tables.map(table => (
          <div key={table.id}>
            <LiMenu>
              <ClipboardOutline
                color="#B2DA5A"
                width="3rem" height="1.5rem"
              />
              {table.name}
            </LiMenu>
          </div>
        ))}
      </SubAside>
      <Container display="flex" justifyContent="flex-end" padding="110px 6px 0px 55px">
        <Body>
          <TableWithTabs>
            <div style={{ overflow: "scroll" }}>
              <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                height: "fit-content",
                padding: "5px",
              }}>
                <Title
                  color="#B2DA5A"
                  fontSizeResponsive="24px"
                  fontWeight="400"
                >
                  Deseja finalizar a comanda ?
              </Title>
                <Button
                  content="Fechar comanda"
                  width="20%"
                  height="40px"
                  heightResponsive="40px"
                  margin="0 0 0 24px"
                />
              </div>

              <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                height: "fit-content",
                padding: "5px",
                marginTop: "36px"
              }}>
                <P color="#B2DA5A" fontSizeResponsive="18px" fontWeight="bold">Total: </P>
                <P
                  marginLeft="14px"
                  color="#B2DA5A"
                  fontSizeResponsive="18px"
                  fontWeight="bold"
                >
                  R$ 120,00
              </P>
              </div>

              <Linha />

              <Container
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                margin="36px"
                backgroundColor="transparent"
                padding="0px"
                alignitems="center"
                gap="30px"
              >
                {items.map(item => (
                  <CardsCommand
                    name={item.name}
                    price={item.price}
                    desc={item.desc}
                  />
                ))}
              </Container>
            </div>
          </TableWithTabs>
        </Body>
      </Container>
    </Grid>
  );
}

export default Comandas;




