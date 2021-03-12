import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import './AddCategory.css';

import Button from '../../components/Button/Button';
import Aside from '../../components/Aside/Aside';

import api from '../../services/api';

interface ICategory {
    name: string
    id: string
}

function AddCategory(props: ICategory) {
    const history = useHistory();

    const [categories, setCategories] = useState<ICategory[]>([]);
    const [name, setName] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    


    function handleValidation(event: FormEvent) {
        if(name === '') {
            event.preventDefault()
        }
        else{
            event.preventDefault()
        }
    }
   
    async function handleSubmit(event: FormEvent) {
        if (name === '') {
            event.preventDefault();
        }
        else {
            event.preventDefault();
            setShowAlert(true);

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

 
    return (
        <div id="page-AddCategory">
            <Aside />
            <form onSubmit={handleValidation}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1> Cadastrar Categoria </h1>
                    </Grid>

                    <Grid item xs={12}>
                        <hr />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="name">Nome da Categoria:</label>
                        <input placeholder="Ex: Bebidas" value={name} onChange={event => setName(event.target.value)} />
                    </Grid>

                    <Grid item xs={12}>
                        <Button margin="7.5rem" content="Cadastrar Categoria" clicked={handleValidation} />
                    </Grid>

                </Grid>
            </form>


        </div>
    );
}

export default AddCategory;