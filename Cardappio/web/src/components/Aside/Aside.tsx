import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import './Aside.css';

function Aside(props: any) {

    const [active, setActive] = useState(false);
    const Active ={
        textWeight: 'Bold',
        color:'white'
      } 

    return (
        <aside id="componentAside">
            <div className="wrapper">
                <h1>Cardappio</h1>
                <div className="button-wrapper">
                    <Link to='/inicio'><button type="button">Inicio</button></Link>
                    <Link to='/Item'><button type="button">Itens</button></Link>
                    <Link to='/Comandas'><button type="button">Comandas</button></Link>
                    <Link to='/Usuarios'><button type="button">Usuarios</button></Link>
                    <Link to='/inicio'><button type="button">Pedidos</button></Link>
                </div>
            </div>
        </aside>
    );
}

export default Aside;