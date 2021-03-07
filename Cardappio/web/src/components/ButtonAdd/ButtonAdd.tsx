import React from 'react';

import { FiPlus } from 'react-icons/fi';

import { DivAddCategory, DivBtnCategory, DivPlus, Text} from './style'

interface IButtonAdd {
    content?: string
    style?: Object
    margin?: string
}

const ButtonAdd = (props: IButtonAdd) => {
    return(
        <DivAddCategory>
            <DivBtnCategory>
                <DivPlus> 
                    <FiPlus style={{
                        color: '#BD2323',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                        marginLeft: '33%',
                        marginTop: '37%'
                    }}/>
                </DivPlus>
                <Text>{props.content}</Text>
            </DivBtnCategory>
        </DivAddCategory>
    );
}

export default ButtonAdd;