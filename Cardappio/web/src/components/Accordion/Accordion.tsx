import React, { useState } from 'react';
import { FiCamera } from 'react-icons/fi';

import './Accordion.css'

import { AccordionSection, AccordionHeader, AccordionTitle, AccordionButton, AccordionTextButtons, AccordionContent, Content, ContentPicture } from './style'

interface IAccordion {
    width?: string
    margin?: string
    content?: string
    style?: Object
    clicked?: any
    title?: string
    fontWeight?: string
    padding?: string
}

function Accordion(props: IAccordion) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <AccordionSection>
            <AccordionHeader>
                <AccordionTitle>{props.title}</AccordionTitle>
                <AccordionButton onClick={props.clicked}>
                    <AccordionTextButtons>Excluir</AccordionTextButtons>
                </AccordionButton>
                <AccordionButton onClick={props.clicked}>
                    <AccordionTextButtons>Editar</AccordionTextButtons>
                </AccordionButton>
                <AccordionButton onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (<AccordionTextButtons>Reduzir</AccordionTextButtons>) : (<AccordionTextButtons>Ampliar</AccordionTextButtons>)}
                </AccordionButton>
            </AccordionHeader>
            <AccordionContent>
                <Content>
                    <ContentPicture>
                        <FiCamera className="camera" />
                    </ContentPicture>
                    <div className="contentText">
                        <h2>Batata Frita</h2>
                        <p>Batata Frita, Cheddar e Bacon</p>
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
                </Content>
            </AccordionContent>
        </AccordionSection>
    );
}

export default Accordion;


/*
<div className="accordionSection" >
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

*/
