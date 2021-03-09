import React from 'react';
import { Link } from 'react-router-dom';

import './Usuarios.css';

import Accordion from '../../components/Accordion/Accordion';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import Aside from '../../components/Aside/Aside';

function Usuarios() {
    return(
        <div id="page-usuarios">
            <Aside />

            <Accordion title="Cozinha">
                <div className="content">
                    <div className="contentText">
                        <h2>Cozinha 1</h2>
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
                        <h2>Cozinha 2</h2>
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

                <Link to="/AddCozinha">
                    <ButtonAdd content="Adicionar Cozinha" />
                </Link>
            </Accordion>

            <Accordion title="Garçom">
                <div className="content">
                    <div className="contentText">
                        <h2>Garçom 1</h2>
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
                        <h2>Garçom 2</h2>
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

                <Link to="/AddGarcom">
                    <ButtonAdd content="Adicionar Garçom" />
                </Link>
            </Accordion>

        </div>
    );
}

export default Usuarios;