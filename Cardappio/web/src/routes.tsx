import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Inicio from './pages/Inicio/Inicio';
import Cardapio from './pages/Cardapio/Cardapio';
import Comandas from './pages/Comandas/Comandas';
// import Usuarios from './pages/Usuarios/Usuarios';
import Pedidos from './pages/Pedidos/Pedidos';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/inicio" component={Inicio}/>
                <Route path="/cardapio" component={Cardapio}/>
                {/* <Route path="/cardapio/:id" component={Cardapio}/>  */}
                <Route path="/comandas" component={Comandas}/>
                {/* <Route path="/usuarios" component={Usuarios}/> */}
                <Route path="/pedidos" component={Pedidos}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;