import React from 'react';
import { Link } from 'react-router-dom';

import './Comandas.css';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import Accordion from '../../components/Accordion/Accordion';

function Comandas() {
    return(
        <div id="page-comandas">
            <CustomHeader />
            <CustomAside />

            <div className="btnAdd">  
                    <ButtonAdd>
                        <Link to="/NewCategory">
                            <p className="children">Adicionar Mesa</p>
                        </Link>
                    </ButtonAdd>                
            </div>

        </div>
    );
}

export default Comandas;