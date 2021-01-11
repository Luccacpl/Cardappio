import React from 'react';
import Grid from '@material-ui/core/Grid';

import '../styles/pages/Login.css';

function Login() {
    return(
        <div id="page-login">

            <header>
                <h1>Embarcação</h1>
            </header>

            <div className="login-box">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1>Login</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <input type="text" name="Username" placeholder="Username"/>
                    </Grid>
                    <Grid item xs={12}>
                        <input type="password" name="Password" placeholder="Password"/>
                    </Grid>
                    <Grid item xs={12}>
                        <button type="button"> Realizar Login </button>
                    </Grid>
                </Grid> 
            </div>

        </div>
    );
}

export default Login;