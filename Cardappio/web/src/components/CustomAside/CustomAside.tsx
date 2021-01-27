import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import ButtonMenu from '../ButtonMenu/ButtonMenu';

import './CustomAside.css';


function CustomAside() {
    return(
        <aside>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <div className="menuDiv">
                            <Link to="/inicio">
                                <ButtonMenu content="Início"/>
                            </Link>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className="menuDiv">
                            <Link to="/item">
                                <ButtonMenu content="Gerenciar Itens"/>
                            </Link>
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