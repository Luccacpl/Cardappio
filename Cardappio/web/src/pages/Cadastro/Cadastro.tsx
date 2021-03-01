import React from 'react';
import {Link} from 'react-router-dom';

import './Cadastro.css';

import CustomButton from '../../components/CustomButton/CustomButton';

function Cadastro() {
    return (
        <div id="page-Cadastro">
            <aside className="aside-cadastro">
                <form>
                    <h1> Cadastrar</h1>
                    <label htmlFor="email" className="lblEmail">Email</label>
                    <input placeholder="Exemplo@exemplo.com" />
                    <label htmlFor="password">Senha</label>
                    <input placeholder="123456789 "/>
                    <label htmlFor="username">Nome do ADM</label>
                    <input placeholder="ADM1" />
                    <label htmlFor="RestaurantName">Nome do restaurante</label>
                    <input placeholder="Embarcação " />
                    <CustomButton content="Cadastrar"/>
                    <p>Ja possui uma conta? <Link to="/" className="link">Log In</Link></p>
                </form>
            </aside>

            <div className="Image">
            </div>
        </div>
    );
}

export default Cadastro;