import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Aside from '../../components/Aside/Aside'
import SubAside from '../../components/SubAside/SubAside'
import Container from '../../components/Container/Container'
import { Grid } from '../../components/Grid/style'
import CardsOrder from '../../components/CardsOrder/index'
import { TableWithTabs, Body, CardsContainer } from './style'

function Pedidos() {

  const [items, setItems] = useState([
    {
      id: 0,
      name: 'Teste',
      desc: "teste teste",
      tableNumber: "3"
    },
    {
      id: 1,
      name: 'Teste',
      desc: "teste teste",
      tableNumber: "2"
    },
    {
      id: 2,
      name: 'Teste',
      desc: "teste teste",
      tableNumber: "1"
    },
    {
      id: 3,
      name: 'Teste',
      desc: "teste teste",
      tableNumber: "5"
    },
  ])

  return (
    <Grid>
      <Aside />
      <SubAside
        // items={tables}
        title="Gerenciamento de Pedidos"
      >

      </SubAside>
      <Container display="flex" justifyContent="flex-end" padding="110px 6px 0px 55px" height="100vh">
        <Body>
          <TableWithTabs>
            <CardsContainer>
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
                  <CardsOrder
                    key={item.id}
                    name={item.name}
                    desc={item.desc}
                    TableNumber={item.tableNumber}
                  />
                ))}
              </Container>
            </CardsContainer>
          </TableWithTabs>
        </Body>
      </Container>
    </Grid>
  );
}

export default Pedidos;

