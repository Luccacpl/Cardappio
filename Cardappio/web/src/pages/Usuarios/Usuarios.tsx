import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import NewAside from '../../components/NewAside/NewAside'
import SubAside from '../../components/SubAside/SubAside'
import Container from '../../components/Container/Container'
import { Grid } from '../../components/Grid/style'


function Usuarios() {
    return (
        <Grid>
            <NewAside></NewAside>
            <SubAside title="Usuarios"></SubAside>
            <Container>
                <Grid grid="auto/ 1.5fr 2fr 2fr 2fr 1.5fr" gridGap="2.5% 2.5%" rowGap="2.5%" marginTop="2%">

                </Grid>
                <Grid grid="auto/ 1.5fr 2fr 2fr 2fr 1.5fr" gridGap="2.5%" rowGap="10px">

                </Grid>
            </Container>
        </Grid>
    );
}

export default Usuarios;


