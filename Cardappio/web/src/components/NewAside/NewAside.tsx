import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { colors } from '../../utils';

import { useLocation } from 'react-router-dom'

import ArrowBack from '../../public/icons/arrow-back-outline.svg';

import Svg from '../Svg/Svg';

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

    const location = useLocation();
    const actualRoute = location.pathname;

    const mainRoute = `${actualRoute}`;

    return (
        <Aside>
            <AsideTitle>Cardappio</AsideTitle>
            <AsideUl>
                <Link to="/inicio" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                    <AsideLi
                        backgroundColor={mainRoute === '/inicio' ? colors.menuBlue : colors.lightGrey}
                    >
                        <AsideLiText
                            color={mainRoute === '/inicio' ? colors.white : colors.orange}
                            fontWeight={mainRoute === '/inicio' ? 'bold' : '400'}
                        >
                            Inicio
                        </AsideLiText>
                    </AsideLi>
                </Link>
                <Link to="/item" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <AsideLi
                        backgroundColor={mainRoute === '/item' ? colors.menuBlue : colors.lightGrey}
                    >
                        <AsideLiText
                            color={mainRoute === '/item' ? colors.white : colors.orange}
                            fontWeight={mainRoute === '/item' ? 'bold' : '400'}
                        >
                            Cardapio
                        </AsideLiText>
                    </AsideLi>
                </Link>
                <Link to="/comandas" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <AsideLi
                        backgroundColor={mainRoute === '/comandas' ? colors.menuBlue : colors.lightGrey}
                    >
                        <AsideLiText
                            color={mainRoute === '/comandas' ? colors.white : colors.orange}
                            fontWeight={mainRoute === '/comandas' ? 'bold' : '400'}
                        >
                            Comandas
                        </AsideLiText>
                    </AsideLi>
                </Link>
                <Link to="/usuarios" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <AsideLi
                        backgroundColor={mainRoute === '/usuarios' ? colors.menuBlue : colors.lightGrey}
                    >
                        <AsideLiText
                            color={mainRoute === '/usuarios' ? colors.white : colors.orange}
                            fontWeight={mainRoute === '/usuarios' ? 'bold' : '400'}
                        >
                            Usuarios
                        </AsideLiText>
                    </AsideLi>
                </Link>
                <Link to="/pedidos" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <AsideLi
                        backgroundColor={mainRoute === '/pedidos' ? colors.menuBlue : colors.lightGrey}
                    >
                        <AsideLiText
                            color={mainRoute === '/pedidos' ? colors.white : colors.orange}
                            fontWeight={mainRoute === '/pedidos' ? 'bold' : '400'}
                        >
                            Pedidos
                        </AsideLiText>
                    </AsideLi>
                </Link>
            </AsideUl>
            <Link to="/">
                <AsideBackButton>
                    <Svg src={ArrowBack} width="1.5rem" height="1.5rem" margin="auto" />
                </AsideBackButton>
            </ Link>
        </Aside>
    );
}

export default NewAside;