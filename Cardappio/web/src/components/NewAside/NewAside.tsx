import React from 'react'
import { Link } from 'react-router-dom';
import { colors } from '../../utils';

import {
    Aside,
    AsideTitle,
    AsideUl,
    AsideLi,
    AsideLiText,
    AsideBackButton
} from './style'


interface InewAside {
}

const NewAside = (props: InewAside) => {
    return(
        <Aside>
            <AsideTitle>Cardappio</AsideTitle>
            <AsideUl>
                <AsideLi>
                 <Link to="/inicio" style={{ color: 'inherit', textDecoration: 'inherit'}} ><AsideLiText>Inicio</AsideLiText></Link>   
                </AsideLi>
                <AsideLi>
                   <Link to="/item" style={{ color: 'inherit', textDecoration: 'inherit'}}><AsideLiText>Cardapio</AsideLiText></Link>
                </AsideLi>
                <AsideLi>
                   <Link to="/Comandas" style={{ color: 'inherit', textDecoration: 'inherit'}}></Link> <AsideLiText>Mesas</AsideLiText>
                </AsideLi>
                <AsideLi>
                   <Link to="/Usuarios" style={{ color: 'inherit', textDecoration: 'inherit'}}></Link> <AsideLiText>Usuarios</AsideLiText>
                </AsideLi>
                <AsideLi>
                   <Link to="/Pedidos" style={{ color: 'inherit', textDecoration: 'inherit'}}></Link><AsideLiText>Pedidos</AsideLiText>
                </AsideLi>
            </AsideUl>
            <AsideBackButton></AsideBackButton>
        </Aside>
    );
} 

export default NewAside;