import React from 'react';
import Grid from '@material-ui/core/Grid';

import './AddCategory.css';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';
import CustomButton from '../../components/CustomButton/CustomButton';

function AddCategory() {
    return(
        <div id="page-AddCategory">
            <CustomHeader />
            <CustomAside />

            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1> Cadastrar Categoria </h1>
                    </Grid>

                    <Grid item xs={12}>
                        <hr/>
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="name">Nome da Categoria:</label>
                        <input  placeholder="Ex: Bebidas" />
                    </Grid>

                    <Grid item xs={12}>
                        <CustomButton content="Cadastrar Categoria"/>
                    </Grid>

                </Grid>
            </form>


        </div>
    );
}

export default AddCategory;