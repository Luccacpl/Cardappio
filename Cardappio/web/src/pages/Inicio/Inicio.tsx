import React from 'react';

import Aside from '../../components/Aside/Aside';
import Alert from '../../components/Alert/Alert';

function Inicio() {
    return (
        <div id="page-inicio">
            <Aside />
            <Alert with="success" text="Sucesso - Cadastro realizado com sucesso!" />
        </div>
    );
}

export default Inicio;