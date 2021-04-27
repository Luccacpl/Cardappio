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
                        backgroundColor={mainRoute === '/inicio' ? colors.lightBlack : colors.black}
                    >
                        <AsideLiText
                            color={mainRoute === '/inicio' ? colors.green : colors.green}
                            fontWeight={mainRoute === '/inicio' ? 'bold' : '400'}
                        >
                            Inicio
                        </AsideLiText>
                    </AsideLi>
                </Link>
                <Link to="/cardapio" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <AsideLi
                        backgroundColor={mainRoute === '/cardapio' ? colors.lightBlack : colors.black}
                    >
                        <AsideLiText
                            color={mainRoute === '/cardapio' ? colors.green : colors.green}
                            fontWeight={mainRoute === '/cardapio' ? 'bold' : '400'}
                        >
                            Cardápio
                        </AsideLiText>
                    </AsideLi>
                </Link>
                <Link to="/mesas" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <AsideLi
                        backgroundColor={mainRoute === '/mesas' ? colors.lightBlack : colors.black}
                    >
                        <AsideLiText
                            color={mainRoute === '/mesas' ? colors.green : colors.green}
                            fontWeight={mainRoute === '/mesas' ? 'bold' : '400'}
                        >
                            Mesas
                        </AsideLiText>
                    </AsideLi>
                </Link>
                <Link to="/usuarios" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <AsideLi
                        backgroundColor={mainRoute === '/usuarios' ? colors.lightBlack : colors.black}
                    >
                        <AsideLiText
                            color={mainRoute === '/usuarios' ? colors.green : colors.green}
                            fontWeight={mainRoute === '/usuarios' ? 'bold' : '400'}
                        >
                            Usuarios
                        </AsideLiText>
                    </AsideLi>
                </Link>
                <Link to="/pedidos" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <AsideLi
                        backgroundColor={mainRoute === '/pedidos' ? colors.lightBlack : colors.black}
                    >
                        <AsideLiText
                            color={mainRoute === '/pedidos' ? colors.green : colors.green}
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