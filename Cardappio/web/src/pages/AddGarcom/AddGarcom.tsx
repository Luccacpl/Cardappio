import React from 'react';
import Grid from '@material-ui/core/Grid';

import './AddGarcom.css';

import Button from '../../components/Button/Button';
import Aside from '../../components/Aside/Aside';

function AddGarcom() {
    return(
        <div id="page-AddGarcom">
            <Aside />

            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1> Adicionar Garçom </h1>
                    </Grid>

                    <Grid item xs={12}>
                        <hr/>
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="name">Login: </label>
                        <input  placeholder="Ex: Garcom1" />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="name">Senha: </label>
                        <input  placeholder="Ex: 123456789" />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="name">Mesa: </label>
                        <select id="mesas" name="mesas">
                            <option value="mesa1">Mesa 1</option>
                            <option value="mesa2">Mesa 2</option>
                            <option value="mesa3">Mesa 3</option>
                            <option value="mesa4">Mesa 4</option>
                            <option value="mesa5">Mesa 5</option>
                            <option value="mesa6">Mesa 6</option>
                        </select>
                    </Grid>

                    <Grid item xs={12}>
                        <Button />
                    </Grid>

                </Grid>
            </form>
        </div>
    )
}

export default AddGarcom;