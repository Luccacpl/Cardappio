import React from 'react';
import { Link } from 'react-router-dom';

import './Usuarios.css';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';
import Accordion from '../../components/Accordion/Accordion';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';

function Usuarios() {
    return(
        <div id="page-usuarios">
            <CustomHeader/>
            <CustomAside />

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
                    <ButtonAdd>
                        <p className="children"> Adicionar Cozinha </p>
                    </ButtonAdd>
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
                    <ButtonAdd>
                        <p className="children"> Adicionar Garçom </p>
                    </ButtonAdd>
                </Link>
            </Accordion>

        </div>
    );
}

export default Usuarios;