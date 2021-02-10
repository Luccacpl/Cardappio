import React from 'react';

import './Login.css';

function Login() {
    return(
        <div id="page-Login">
            <aside className="aside-login">
                <h1>Cardappio</h1>
                <h2>Gerencie seu comercio de forma fácil e <br/> rápida!</h2>
                <label className="lblUser">Username:</label>
                <input type="text" placeholder="Ex: ADM1" className="txtUsername"></input>
                <label className="lblSenha">Senha:</label>
                <input type="password" placeholder="Ex: 123456789" className="txtPassword"></input>
                <p>Esqueci meu email ou senha.</p>
                <button>Realizar Login</button>
                <a href="/cadastro"><p className="cadastro">Realizar Cadastro </p></a>
            </aside>
            <div className="Image">
            </div>
        </div>
    );
}

export default Login;