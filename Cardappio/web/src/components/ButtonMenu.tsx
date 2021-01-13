import React from 'react';

import '../styles/components/ButtonMenu.css';

function ButtonMenu(props:any) {
    return(
            <button type="button" className="menuButton"> {props.content} </button>
    );
}

export default ButtonMenu;