import React from 'react';

import '../styles/components/CustomButton.css';

function CustomButton(props:any) {
    return(
            <button type="button" className="CustomButton"> {props.content} </button>
    );
}

export default CustomButton;