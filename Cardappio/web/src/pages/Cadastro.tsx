import React from 'react';
import Grid from '@material-ui/core/Grid';

import '../styles/pages/Cadastro.css';

import CustomHeader from '../components/CustomHeader';
import CustomAside from '../components/CustomAside';

function Cadastro() {
    return(
        <div id="page-cadastro">
            
            <CustomHeader/>

            <CustomAside/>

            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1> Cadastrar ADM </h1>
                    </Grid>

                    <Grid item xs={12}>
                        <hr/>
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="name">Nome do Adm:</label>
                        <input  placeholder="Ex: José" value="nomeAdm" />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="email">Email:</label>
                        <input  placeholder="Ex: teste@email.com" value="email" />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="username">Nome do usuário:</label>
                        <input  placeholder="Ex: ADM1" value="username" />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="password">Senha:</label>
                        <input  placeholder="Ex: 123456789 " value="password" />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="password">Confirmação de Senha:</label>
                        <input  placeholder="Ex: 123456789 " value="password" />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="RestaurantName">Nome do restaurante:</label>
                        <input  placeholder="Ex: Embarcação " value="RestaurantName" />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="Address">Endereço:</label>
                        <input  placeholder="Ex: Rua Bernardo Brownie " value="Address" />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="name">Numero:</label>
                        <input  placeholder="Ex: 270 " value="number" />
                    </Grid>

                    <Grid item xs={12}>
                        <button type="button"> Realizar Login </button>
                    </Grid>

                </Grid>
            </form>

        </div>
    );
}

export default Cadastro;