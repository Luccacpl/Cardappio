import React from 'react';

import {Link} from 'react-router-dom';

import CustomButton from '../../components/CustomButton/CustomButton';

import './Login.css';

function Login() {
    return (
        <div id="page-Login">
            <aside className="aside-login">
                <div className="wrapper">
                    <h1>Cardappio</h1>
                    <h2>Gerencie seu comercio de forma fácil e <br /> rápida!</h2>
                    <label className="lblUsuario">Usuario:</label>
                    <input type="text" placeholder="Coloque seu Usuario" className="inputUsuario"></input>
                    <label className="lblSenha">Senha:</label>
                    <input type="text" placeholder="Coloque sua Senha" className="inputSenha"></input>
                    <CustomButton content="Log In"/>
                    <p className="p1">Não tem uma conta? <Link to="/cadastro" className="link">Cadastre-se aqui!</Link></p>
                    <p className="p2"><Link to="/" className="link">Esqueceu a senha?</Link></p>
                </div>
            </aside>
            <div className="Image">
            </div>
        </div>
    );
}

export default Login;