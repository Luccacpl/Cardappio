import React from 'react';

import './CustomButton.css';

function CustomButton(props:any) {
    return(
            <button type="submit"  className="CustomButton"> {props.content} </button>
    );
}

export default CustomButton;