import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import NewAside from '../../components/NewAside/NewAside'
import SubAside from '../../components/SubAside/SubAside'
import Cards from '../../components/Cards/Cards'
import Container from '../../components/Container/Container'
import { Grid } from '../../components/Grid/style'
import Modal from '../../components/Modal/Modal'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import api from '../../services/api'
import { ChangeEventHandler } from 'react';

interface ICategory {
    name: string,
    id: number
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Item() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [refresh, setRefresh] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setOpenError(false);
    };

    async function handleSubmit(event: ChangeEventHandler<HTMLInputElement>) {
        if (name === '') {
           return setOpenError(true)
        }
        else {
            setOpen(true);

            const data = new FormData();

            data.append('name', name);

            await api.post('category', { name });

            history.push('/item');

            console.log(data);

            console.log({
                name,
            })

            

            return setShowModal(false);
        }
    }

    useEffect(() => {
        function GetApi() {
            api.get<ICategory[]>('/category').then(response => {
                setCategories(response.data)
                console.log(response.data);
            })
        }
        GetApi();
    }, [refresh])

    return (
        <Grid>
            <NewAside></NewAside>
            <SubAside title="Categorias" clicked={() => setShowModal(true)}></SubAside>

            <Container>
                <Grid grid="auto/ 1.5fr 2fr 2fr 2fr 1.5fr" gridGap="2.5% 2.5%" rowGap="2.5%" marginBottom="2%" marginTop="15%">
                    <Cards gridStart="2"></Cards>
                    <Cards gridStart="3"></Cards>
                    <Cards gridStart="4"></Cards>
                </Grid>
                <Grid grid="auto/ 1.5fr 2fr 2fr 2fr 1.5fr" gridGap="2.5%" rowGap="10px">
                    <Cards gridStart="2"></Cards>
                    <Cards gridStart="3"></Cards>
                    <Cards gridStart="4"></Cards>
                </Grid>
            </Container>
            {showModal === true &&
                <Modal
                    title="Adicionar Categoria"
                    ButtonTitle="Adicionar"
                    text="Digite o nome da categoria que deseja adicionar no campo abaixo."
                    clicked={handleSubmit}
                    value={name}
                    change={event => setName(event.target.value)}
                    Backclicked={() => setShowModal(false)}
                />}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Cadastro realizado com sucesso!
                </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Ocorreu um erro! Cadastro não realizado
                </Alert>
            </Snackbar>
        </Grid>
    );
}

export default Item;