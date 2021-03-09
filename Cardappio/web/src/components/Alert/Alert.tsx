import React from 'react'

import { DivAlert, AlertText, AlertCircle } from './style'

import { MdDone, MdClose } from 'react-icons/md'

import { colors } from '../../utils/colors';

interface IAlert {
    text?: string
    with: 'success' | 'failure'
    buttonAction?: () => void
    clicked?: any
    style?: Object
    color?: string
}

const Alert = (props: IAlert) => {
    return (
        <DivAlert backgroundColor={
            props.with === 'failure'
                ? colors.orangeAlert
                : colors.greenAlert
        }>
            <AlertText>{props.text}</AlertText>
            { props.with === 'success' ?
                <AlertCircle onClick={props.clicked}><MdDone style={{
                    width: "24px",
                    height: "24px",
                    color: "#0E6300"
                }}></MdDone></AlertCircle>
                :
                <AlertCircle onClick={props.clicked}><MdClose style={{
                    width: "24px",
                    height: "24px",
                    color: "#C55E00"
                }}></MdClose></AlertCircle>
            }

        </DivAlert>
    );
}

export default Alert;