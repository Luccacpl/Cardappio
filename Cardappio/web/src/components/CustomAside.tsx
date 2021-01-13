import React from 'react';
import Grid from '@material-ui/core/Grid';

import ButtonMenu from './ButtonMenu';

import '../styles/components/CustomAside.css';


function CustomAside() {
    return(
        <aside>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <div className="menuDiv">
                            <ButtonMenu content="Início"/>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className="menuDiv">
                            <ButtonMenu content="Gerenciar Itens"/>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className="menuDiv">
                            <ButtonMenu content="Comandas"/>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className="menuDiv">
                            <ButtonMenu content="Usuários"/>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className="menuDiv">
                            <ButtonMenu content="Pedidos"/>
                        </div>
                    </Grid>
                </Grid>
            </aside>
    );
}

export default CustomAside;