import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import NewAside from '../../components/NewAside/NewAside'
import SubAside from '../../components/SubAside/SubAside'
import Cards from '../../components/Cards/Cards'
import Container from '../../components/Container/Container'
import { Grid } from '../../components/Grid/style'
import Modal from '../../components/Modal/Modal'

import api from '../../services/api'
import { ChangeEventHandler } from 'react';

interface ICategory {
    name: string,
    id: number
}

function Pedidos() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [refresh, setRefresh] = useState(0);

    async function handleSubmit(event: ChangeEventHandler<HTMLInputElement>) {
        if (name === '') {
            return alert('Insira um nome no campo');
        }
        else {
            const data = new FormData();

            data.append('name', name);

            await api.post('category', { name });

            history.push('/item');

            console.log(data);

            console.log({
                name,
            })
        }
    }

    async function handleDelete(id: number) {
        await api.delete('/category/' + id)
        setRefresh(chave => chave + 1)
        console.log(id);

        alert('Categoria deletada com sucesso!');
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
            <SubAside></SubAside>
            <Modal title="Teste" ButtonTitle="Adicionar" text="teste teste teste" clicked={handleSubmit} value={name} change={event => setName(event.target.value)}/>
            <Container>
                <Grid grid="auto/ 1.5fr 2fr 2fr 2fr 1.5fr" gridGap="2.5% 2.5%" rowGap="2.5%" marginTop="2%">
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
        </Grid>
    );
}

export default Pedidos;

//            <Modal title="Teste" text="teste teste teste" />
