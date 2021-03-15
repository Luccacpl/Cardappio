import React, { useState, useEffect } from 'react'
import EditSVG from '../../public/icons/create-outline.svg'
import TrashSVG from '../../public/icons/trash-outline.svg'

import { DivContainer, DivTitle, Title, SubTitle, SubMenu, TitleSubMenu, UlMenu, LiMenu, AddButton } from './style'

import api from '../../services/api';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import Svg from '../Svg/Svg'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

interface ISubAside {
    clicked?: any
    title: string
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

    const location = useLocation();
    console.log(location.pathname);

    
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
                    {location.pathname === '/item' ?
                        categories.map(category =>
                            <> <LiMenu>
                                <Svg src={TrashSVG} width="3rem" height="1.5rem" onClick={() => handleDelete(category.id)} />
                                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <Svg src={EditSVG} width="3rem" height="1.5rem" />
                                </Link>
                                {category.name}
                            </LiMenu></>
                        ) : null
                    }
                </UlMenu>
                <AddButton onClick={props.clicked}>+ Adicionar nova categoria</AddButton>
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