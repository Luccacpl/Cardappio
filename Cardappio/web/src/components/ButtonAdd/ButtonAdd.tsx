import React from 'react';

import { FiPlus } from 'react-icons/fi';

import './ButtonAdd.css';

function ButtonAdd(props:any) {
    return(
        <div className="addCategoria">
            <div className="btnCategoria">
                <div className="divPlus"> 
                    <FiPlus className="plusIcon"/>
                </div>
                    {props.children} 
                </div>
        </div>
    );
}

export default ButtonAdd;