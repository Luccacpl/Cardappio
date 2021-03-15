import React from 'react'

import { Div } from './style'

interface IContainer {
    children?: React.ReactNode
    display?: string
    flexDirection?: string
    height?: string
    margin?: string
}

function Container(props: IContainer) {
    return(
        <Div 
            display={props.display}
            flexDirection={props.flexDirection}
            height={props.height}
            margin={props.margin}
        >
            {props.children}
        </Div>
    );
}

export default Container;