import React from 'react';
import { Link } from 'react-router-dom';

import './Comandas.css';

import api from '../../services/api'

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
                <Link to="/NewCategory">
                    <ButtonAdd content="Adicionar Mesa" />
                </Link>                
            </div>

            <Accordion title="Mesa 1">
                <div className="content">
                    <div className="contentText">
                        <h2>Comanda 1</h2>
                    </div>
                    <div className="contentButtons">
                        <input type="text"></input>
                        <button>
                            <p>Ver</p>
                        </button>
                        <button>
                            <p>Excluir</p>
                        </button>
                        <button>
                            <p>Editar</p>
                        </button>
                    </div>  
                </div>

                <div className="content">
                    <div className="contentText">
                        <h2>Comanda 2</h2>
                    </div>
                    <div className="contentButtons">
                        <input type="text"></input>
                        <button>
                            <p>Ver</p>
                        </button>
                        <button>
                            <p>Excluir</p>
                        </button>
                        <button>
                            <p>Editar</p>
                        </button>
                    </div>  
                </div>

                <Link to="/NewItem">
                    <ButtonAdd content="Adicionar Comanda" />
                </Link>
            </Accordion>

            <Accordion title="Mesa 2">
                <div className="content">
                    <div className="contentText">
                        <h2>Comanda 1</h2>
                    </div>
                    <div className="contentButtons">
                        <input type="text"></input>
                        <button>
                            <p>Ver</p>
                        </button>
                        <button>
                            <p>Excluir</p>
                        </button>
                        <button>
                            <p>Editar</p>
                        </button>
                    </div>  
                </div>

                <div className="content">
                    <div className="contentText">
                        <h2>Comanda 2</h2>
                    </div>
                    <div className="contentButtons">
                        <input type="text"></input>
                        <button>
                            <p>Ver</p>
                        </button>
                        <button>
                            <p>Excluir</p>
                        </button>
                        <button>
                            <p>Editar</p>
                        </button>
                    </div>  
                </div>

                <Link to="/NewItem">
                    <ButtonAdd content="Adicionar Comanda" />
                </Link>
            </Accordion>

            <Accordion title="Mesa 3" >
                <div className="content">
                    <div className="contentText">
                        <h2>Comanda 1</h2>
                    </div>
                    <div className="contentButtons">
                        <input type="text"></input>
                        <button>
                            <p>Ver</p>
                        </button>
                        <button>
                            <p>Excluir</p>
                        </button>
                        <button>
                            <p>Editar</p>
                        </button>
                    </div>  
                </div>

                <div className="content">
                    <div className="contentText">
                        <h2>Comanda 2</h2>
                    </div>
                    <div className="contentButtons">
                        <input type="text"></input>
                        <button>
                            <p>Ver</p>
                        </button>
                        <button>
                            <p>Excluir</p>
                        </button>
                        <button>
                            <p>Editar</p>
                        </button>
                    </div>  
                </div>

                <Link to="/NewItem">
                    <ButtonAdd content="Adicionar Comanda" />
                </Link>
            </Accordion>
        </div>
    );
}

export default Comandas;