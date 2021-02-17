import React, {FormEvent, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import './AddCategory.css';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';
import CustomButton from '../../components/CustomButton/CustomButton';

import api from '../../services/api';

function AddCategory() {
    const history = useHistory();

    const [name, setName] = useState('');

    async function handleSubmit (event: FormEvent) {
        event.preventDefault();
        
        const data = new FormData();

        data.append('name', name);

        await api.post('category', {name});

        alert('Cadastro realizado com sucesso!');
        history.push('/item');

        console.log(data);

        console.log({
            name,
        })
    }

    return(
        <div id="page-AddCategory">
            <CustomHeader />
            <CustomAside />

            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1> Cadastrar Categoria </h1>
                    </Grid>

                    <Grid item xs={12}>
                        <hr/>
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="name">Nome da Categoria:</label>
                        <input  placeholder="Ex: Bebidas" value={name} onChange={event => setName(event.target.value)}/>
                    </Grid>

                    <Grid item xs={12}>
                        <CustomButton onClick={handleSubmit} content="Cadastrar Categoria"/>
                    </Grid>

                </Grid>
            </form>


        </div>
    );
}

export default AddCategory;