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

import { Title, P } from '../../components/Text/text'
import Button from '../../components/Button/Button'
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

    async function handleDelete(id: number) {
        try{
            await api.delete('/item/' + id, {headers: {
                'authorization': getTokenFromStorage()
            }})
            setRefresh(chave => chave + 1)
            console.log(id);
        }
       catch(error){
           return alert('ocorreu algum erro')
       }

        setOpen(true)
    }


    async function handleSubmit(event: ChangeEventHandler<HTMLInputElement>) {
        if (name === '') {
            return alert('Complete o campo corretamente!');
        }
        else {
            try{
                const data = new FormData();

                data.append('name', name);
    
                await api.post('category', { name }, {headers: {
                    'authorization': getTokenFromStorage()
                }});

                history.push('/item');

                setRefresh(chave => chave + 1);

                window.location.reload();

                setShowModal(false);
    
            }
            catch(error){
              return alert('Erro ao tentar cadastrar Categoria');
            }
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
                    addButton="Adicionar novo prato"
                    src={Food}
                    logo={Logo}
                    placeholder="Digite o nome de um item"
                    />
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
            {showModal === true &&
                <Modal
                    title="Vamos adicionar uma nova categoria!"
                    ButtonTitle="Adicionar"
                    text="Por favor, preencha os campos abaixo, para prosseguirmos no processo de cadastro."
                    change={event => setName(event.target.value)}
                    closeClicked={() => setShowModal(false)}
                >
                   <Input 
                    width="55%"
                    marginTop="20px"
                    placeholder="Digite o nome da categoria"
                    value={name}
                    onChange={event => setName(event.target.value)}
                   />
                   <Button 
                    content="Adicionar Categoria"
                    width="25%"
                    height="2.25rem"
                    marginTop="28px"
                    clicked={handleSubmit}
                    />
                </Modal>
            }
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


