import React from 'react';
import { Link } from 'react-router-dom';

import './Comandas.css';

import api from '../../services/api'

import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import Accordion from '../../components/Accordion/Accordion';
import Aside from '../../components/Aside/Aside';


function Comandas() {
    return(
       <div>
           <Aside />
           <Accordion title="teste"></Accordion>
       </div> 
    );
}

export default Comandas;




