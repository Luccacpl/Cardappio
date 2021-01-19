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

            </div>
        </div>
    );
}

export default Item;