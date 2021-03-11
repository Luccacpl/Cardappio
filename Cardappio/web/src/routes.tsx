import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Inicio from './pages/Inicio/Inicio';
import Item from './pages/Item/Item';
import AddCategory from './pages/AddCategory/AddCategory';
import AddItem from './pages/AddItem/AddItem';
import Comandas from './pages/Comandas/Comandas';
import Usuarios from './pages/Usuarios/Usuarios';
import AddCozinha from './pages/AddCozinha/AddCozinha';
import AddGarcom from './pages/AddGarcom/AddGarcom';
import Pedidos from './pages/Pedidos/Pedidos';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/inicio" component={Inicio}/>
                <Route path="/Item" component={Item}/>
                <Route path="/NewCategory" component={AddCategory}/>
                <Route path="/NewItem" component={AddItem}/>
                <Route path="/Comandas" component={Comandas}/>
                <Route path="/Usuarios" component={Usuarios}/>
                <Route path="/AddCozinha" component={AddCozinha}/>
                <Route path="/AddGarcom" component={AddGarcom}/>
                <Route path="/pedidos" component={Pedidos}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;