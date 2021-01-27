import React from 'react';
import Grid from '@material-ui/core/Grid';

import './AddItem.css';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';
import CustomButton from '../../components/CustomButton/CustomButton';


function AddItem() {
    return(
        <div id="page-AddItem">
            <CustomHeader />
            <CustomAside />

            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1> Cadastrar Item </h1>
                    </Grid>

                    <Grid item xs={12}>
                        <hr/>
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="name">Nome do Item:</label>
                        <input  placeholder="Ex: X-Salada" />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="description">Descrição do item:</label>
                        <input  placeholder="Ex: Pão, Hamburguer, alface e maionese"/>
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="username">Imagem do item:</label>
                        <input  placeholder="Ex: ADM1"/>
                    </Grid>

                    <Grid item xs={12}>
                        <CustomButton content="Cadastrar Item"/>
                    </Grid>

                </Grid>
            </form>


        </div>
    );
}

export default AddItem;