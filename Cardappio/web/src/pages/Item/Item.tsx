import React from 'react';
import { Link } from 'react-router-dom';

import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';
import Accordion from '../../components/Accordion/Accordion';

import './Item.css';

function Item() {
    

    return(
        <div id="page-item">
            <CustomHeader />
            <CustomAside />
            <div className="btnAdd">  
                    <ButtonAdd>
                        <Link to="/NewCategory">
                            <p className="children">Adicionar Categoria</p>
                        </Link>
                    </ButtonAdd>                
            </div>
            <Accordion title="Porções" item="Batata Frita">
                <p>Batata Frita, Bacon e Cheddar.</p>
            </Accordion>  

            <Accordion title="teste" item="teste">
                <p>Teste teste</p>
            </Accordion>     
        </div>
    );
}

export default Item;
