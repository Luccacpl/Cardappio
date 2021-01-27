import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { FiCamera } from 'react-icons/fi';

import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';

import './Accordion.css'

function Accordion(props:any) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="accordionSection">
                <div className="accordionHeader">
                    <h1>{props.title}</h1>
                    <button className="btnExcluir">
                        <p>Excluir</p>
                    </button>
                    <button className="btnEditar">
                        <p>Editar</p>
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="btnAccordion">
                        {isOpen ? (<p>Reduzir</p>): (<p>Ampliar</p>)}
                    </button>
                </div>
                {isOpen && (
                <div className="accordionContent">
                    <div className="content">
                        <div className="contentPicture">
                            <FiCamera className="camera"/>
                        </div>
                        <div className="contentText">
                            <h2>{props.item}</h2>
                            <p>{props.children}</p>
                        </div>
                        <div className="contentButtons">
                            <input type="text"></input>
                            <button>
                                <p>Excluir</p>
                            </button>
                            <button>
                                <p>Editar</p>
                            </button>
                        </div>  
                    </div>

                    <div className="content">
                        <div className="contentPicture">
                            <FiCamera className="camera"/>
                        </div>
                        <div className="contentText">
                            <h2>{props.item}</h2>
                            <p>{props.children}</p>
                        </div>
                        <div className="contentButtons">
                            <input type="text"></input>
                            <button>
                                <p>Excluir</p>
                            </button>
                            <button>
                                <p>Editar</p>
                            </button>
                        </div>  
                    </div>

                    <Link to="/NewItem">
                        <ButtonAdd>
                            <p className="children"> Adicionar Item </p>
                        </ButtonAdd>
                    </Link>   
                </div>
                )}
            </div>
    );
}

export default Accordion;