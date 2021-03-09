import React from 'react';

import Grid from '@material-ui/core/Grid';

import './AddCozinha.css';

import Button from '../../components/Button/Button';
import Aside from '../../components/Aside/Aside';

function AddCozinha() {
    return(
        <div id="page-AddCozinha">
            <Aside />

            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1> Adicionar Cozinheiro </h1>
                    </Grid>

                    <Grid item xs={12}>
                        <hr/>
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="name">Login: </label>
                        <input  placeholder="Ex: Cozinheiro1" />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="name">Senha: </label>
                        <input  placeholder="Ex: 123456789" />
                    </Grid>

                    <Grid item xs={12}>
                        <Button />
                    </Grid>

                </Grid>
            </form>
        </div>
    )
}

export default AddCozinha;