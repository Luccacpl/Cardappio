import React from 'react'

import { Div } from './style'

interface IContainer {
    children?: React.ReactNode
}

function Container(props: IContainer) {
    return(
        <Div>{props.children}</Div>
    );
}

export default Container;