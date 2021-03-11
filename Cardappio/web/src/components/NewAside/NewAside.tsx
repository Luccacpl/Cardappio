import React from 'react'
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
                    <AsideLiText>Inicio</AsideLiText>
                </AsideLi>
                <AsideLi>
                    <AsideLiText>Cardapio</AsideLiText>
                </AsideLi>
                <AsideLi>
                    <AsideLiText>Mesas</AsideLiText>
                </AsideLi>
                <AsideLi>
                    <AsideLiText>Usuarios</AsideLiText>
                </AsideLi>
                <AsideLi>
                    <AsideLiText>Pedidos</AsideLiText>
                </AsideLi>
            </AsideUl>
            <AsideBackButton></AsideBackButton>
        </Aside>
    );
} 

export default NewAside;