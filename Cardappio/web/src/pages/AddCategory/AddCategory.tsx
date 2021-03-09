import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import './AddCategory.css';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';
import Button from '../../components/Button/Button';
import Alert from '../../components/Alert/Alert';

import api from '../../services/api';

function AddCategory() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false)


    function handleValidation(event: FormEvent) {
        if(name === '') {
            event.preventDefault()
            setShowAlertError(true)
        }
        else{
            event.preventDefault()
            setShowAlert(true)
        }
    }
   
    async function handleSubmit(event: FormEvent) {
        if (name === '') {
            event.preventDefault();
            return setShowAlertError(true)
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

    function closeError() {
        setShowAlertError(false);
    }

    

    return (
        <div id="page-AddCategory">
            <CustomAside />

            {showAlert && (
                <Alert with="success" text="Sucesso - Categoria cadastrada com sucesso!" clicked={handleSubmit}/>
            )}
            {showAlertError && (
                <Alert with="failure" text="Erro - Complete o campo corretamente!" clicked={closeError}/>
            )}

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