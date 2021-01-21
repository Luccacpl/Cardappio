import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';

import './Item.css';

function Item() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div id="page-item">
            <CustomHeader />
            <CustomAside />
            <Link to="/">  
                <ButtonAdd>
                    <p className="children">Adicionar Categoria</p>
                </ButtonAdd>
            </Link>

            <div className="accordionSection">
                <div className="accordionHeader">
                    <h1>Porções</h1>
                    <button className="btnExcluir">
                        <p>Excluir</p>
                    </button>
                    <button className="btnEditar">
                        <p>Editar</p>
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="btnAccordion">
                        <p>Ampliar</p>
                    </button>
                </div>
                {isOpen && (
                <div className="accordionContent">
                    <div className="content">
                        <div className="contentPicture"></div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}

export default Item;


/* 
<div className="Accordion">
                <div className="divItem_Titulo">
                    <h1>Porções</h1>
                </div>
                <div className="divItem_Direita">
                    <p>Ampliar</p>
                    <p>Excluir</p>
                    <p>Editar</p>
                </div>
            </div>
*/