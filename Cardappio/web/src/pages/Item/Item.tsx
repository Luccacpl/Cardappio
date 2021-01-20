import React from 'react';
import { Link } from 'react-router-dom';

import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';

import './Item.css';

function Item() {
    return(
        <div id="page-item">
            <CustomHeader />
            <CustomAside />
            <Link to="/">  
                <ButtonAdd>
                    <p className="children">Adicionar Categoria</p>
                </ButtonAdd>
            </Link>

            <div className="divItem">
                <div className="divItem_Titulo">
                    <h1>Porções</h1>
                </div>
                <div className="divItem_Direita">
                    <p>Ampliar</p>
                    <p>Excluir</p>
                    <p>Editar</p>
                </div>
            </div>
        </div>
    );
}

export default Item;