import React, {useState} from 'react';

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
                        {isOpen ? (<p>Reduzir</p>) : (<p>Ampliar</p>)}
                    </button>
                </div>
                {isOpen && (
                <div className="accordionContent">
                    {props.children}  
                </div>
                )}
            </div>
    );
}

export default Accordion;
