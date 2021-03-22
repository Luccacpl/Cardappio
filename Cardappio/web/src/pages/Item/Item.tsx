import React, { FormEvent, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import NewAside from '../../components/NewAside/NewAside'
import SubAside from '../../components/SubAside/SubAside'
import Cards from '../../components/Cards/Cards'
import Container from '../../components/Container/Container'
import { Grid } from '../../components/Grid/style'
import Modal from '../../components/Modal/Modal'
import Header from '../../components/Header/Header'

import Logo from '../../public/icons/logo-bk-white.svg'
import Food from '../../public/icons/fast-food-outline.svg'
import EditSVG from '../../public/icons/create-outline.svg'
import TrashSVG from '../../public/icons/trash-outline.svg'
import Svg from '../../components/Svg/Svg'

import { LiMenu, AddButton } from '../../components/SubAside/style'

import { useLocation } from 'react-router-dom'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';


import api from '../../services/api'
import { ChangeEventHandler } from 'react';
import { Input } from 'components/Input/Input';
import { colors } from 'utils';

interface ICategory {
    name: string,
    id: number
}

interface IItem {
    name: string,
    id: number
    desc: string
    imageurl: string
    avaible: boolean
    price: number
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Item() {
    const history = useHistory();

    const location = useLocation();

    const [name, setName] = useState('');
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [items, setItems] = useState<IItem[]>([]);
    const [refresh, setRefresh] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);


    const isUserAuthenticated = () =>
        localStorage.getItem('TOKEN') === null && history.push('/')

    const getTokenFromStorage = (): string =>
        JSON.parse(localStorage.getItem('TOKEN') as string).authorization
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setOpenError(false);
    };

    async function handleDelete(id: number) {
        await api.delete('/item/' + id)
        setRefresh(chave => chave + 1)
        console.log(id);


        setOpen(true)
    }


    async function handleSubmit(event: ChangeEventHandler<HTMLInputElement>) {
        if (name === '') {
            return setOpenError(true);
        }
        else {
            setOpen(true);

            const data = new FormData();

            data.append('name', name);

            await api.post('category', { name });

            history.push('/item');

            console.log(data);

            setRefresh(chave => chave + 1);

            window.location.reload();

            console.log({
                name,
            })

            return setShowModal(false);

        }
    }
    useEffect(() => {
        isUserAuthenticated()
    }, [])

    useEffect(() => {
        function GetApi() {
            api.get<ICategory[]>('/category', {
                headers: {
                    'authorization': getTokenFromStorage()
                }
            }).then(response => {
                setCategories(response.data)
                console.log(response.data);
            })
            api.get<IItem[]>('/item').then(response => {
                setItems(response.data)
                console.log(response.data)
            })
        }
        GetApi();
    }, [refresh])

    return (
        <Grid>
            <NewAside></NewAside>
            <SubAside title="Categorias" clicked={() => setShowModal(true)}>
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
            </SubAside>

            <Container height="100%" padding="0px 0px 0px 0px" flexDirection="column">
                <Header 
                    title="Todos os seus pratos"
                    subtitle="Categoria:"
                    placeholder="Digite o nome do item"
                    addButton="Adicionar novo prato"
                    src={Food}
                    logo={Logo}                />
                <Container display="inline-flex" justifyContent="flex-start">
                {items.map(item =>
                    <Cards
                        name={item.name}
                        desc={item.desc}
                        price={Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                        src={item.imageurl}
                        TrashClicked={() => handleDelete(item.id)}
                    ></Cards>
                )}
                </Container>
            </Container>
        </Grid>
    );
}

export default Item;

// {showModal === true &&
//     <Modal
//         title="Adicionar Categoria"
//         ButtonTitle="Adicionar"
//         text="Digite o nome da categoria que deseja adicionar no campo abaixo."
//         clicked={handleSubmit}
//         value={name}
//         change={event => setName(event.target.value)}
//         Backclicked={() => setShowModal(false)}
//     />}
// <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//     <Alert onClose={handleClose} severity="success">
//         Cadastro realizado com sucesso!
//     </Alert>
// </Snackbar>
// <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
//     <Alert onClose={handleClose} severity="error">
//         Ocorreu um erro! Cadastro não realizado
//     </Alert>
// </Snackbar>


