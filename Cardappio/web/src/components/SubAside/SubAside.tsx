import React, { useState, useEffect } from 'react'
import EditSVG from '../../public/icons/create-outline.svg'
import TrashSVG from '../../public/icons/trash-outline.svg'

import { DivContainer, DivTitle, Title, SubTitle, SubMenu, TitleSubMenu, UlMenu, LiMenu, AddButton } from './style'

import api from '../../services/api';

import { Link } from 'react-router-dom';

import Svg from '../Svg/Svg'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

interface ISubAside {
    children?: React.ReactNode
    clicked?: any
    title: string
    width?: string
    height?: string
    marginTop?: string
}

interface ICategory {
    name: string
    id: number
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SubAside(props: ISubAside) {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [refresh, setRefresh] = useState(0);
    const [open, setOpen] = React.useState(false);

    const tamanho = categories.length;

    
    async function handleDelete(id: number) {
        await api.delete('/category/' + id)
        setRefresh(chave => chave + 1)
        console.log(id);
   

        setOpen(true)
    }

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    useEffect(() => {
        function GetApi() {
            api.get<ICategory[]>('/category').then(response => {
                setCategories(response.data);
                console.log(response.data);
            })
        }
        GetApi();
    }, [refresh])


    return (
        <DivContainer>
            <DivTitle>
                <Title>{props.title}</Title>
                <SubTitle>{tamanho} {props.title} achadas</SubTitle>
            </DivTitle>
            <SubMenu>
                <TitleSubMenu>{props.title}</TitleSubMenu>
                <UlMenu>
                    {props.children}
                </UlMenu>
                <AddButton 
                    onClick={props.clicked}
                    width={props.width}
                    height={props.height}
                    marginTop={props.marginTop}
                >
                    + Adicionar nova categoria
                </AddButton>
            </SubMenu>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Item deletado com sucesso!
                </Alert>
            </Snackbar>
        </DivContainer>
        
    );
}

export default SubAside;




//<Link to="/NewCategory"> </Link>