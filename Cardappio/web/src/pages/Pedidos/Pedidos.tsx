import React from 'react';

import NewAside from '../../components/NewAside/NewAside'
import SubAside from '../../components/SubAside/SubAside'
import Cards from '../../components/Cards/Cards'

import Grid, { GridSpacing } from '@material-ui/core/Grid'

import { Div } from './style'

function Pedidos() {
    return (
        <>
            <NewAside></NewAside>
            <SubAside></SubAside>
            <Div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <Cards></Cards>
                            <Cards></Cards>
                            <Cards></Cards>
                        </Grid>
                    </Grid>
                </Grid>
            </Div>
        </>
    );
}

export default Pedidos;
