import React from 'react';
import { Link } from 'react-router-dom';

import { CustomAside, Wrapper, Title, ButtonWrapper, AsideButton, } from './style'


interface IAside {
  display?: string
  alignItems?: string
  margin?: string
  border?: string
  borderColor?: string
  clicked?: any
}

const Aside = (props: IAside) => {
  return (
    <CustomAside>
      <Wrapper {...props}>
        <Title>Cardappio</Title>
        <ButtonWrapper>
          <Link to='/inicio'><AsideButton type="button" onClick={props.clicked}>Inicio</AsideButton></Link>
          <Link to='/Item'><AsideButton type="button" onClick={props.clicked}>Itens</AsideButton></Link>
          <Link to='/Comandas'><AsideButton type="button" onClick={props.clicked}>Comandas</AsideButton></Link>
          <Link to='/Usuarios'><AsideButton type="button" onClick={props.clicked}>Usuarios</AsideButton></Link>
          <Link to='/inicio'><AsideButton type="button" onClick={props.clicked}>Pedidos</AsideButton></Link>
        </ButtonWrapper>
      </Wrapper>
    </CustomAside>
  )
}





export default Aside;