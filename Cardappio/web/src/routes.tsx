import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Inicio from './pages/Inicio/Inicio';
import Item from './pages/Item/Item';
import AddCategory from './pages/AddCategory/AddCategory';
import AddItem from './pages/AddItem/AddItem';
import Comandas from './pages/Comandas/Comandas';

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
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;