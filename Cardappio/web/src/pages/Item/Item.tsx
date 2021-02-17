import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { FiCamera } from 'react-icons/fi';

import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';
import Accordion from '../../components/Accordion/Accordion';

import './Item.css';

import api from '../../services/api';

interface ICategory {
    name: string,
    id: number
}

function Item() {

    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        api.get<ICategory[]>('/category').then(response => {
            setCategories(response.data)
            console.log(response.data);
        })
    }, [])

    return(
        <div id="page-item">
            <CustomHeader />
            <CustomAside />
            <div className="btnAdd">  
                    <ButtonAdd>
                        <Link to="/NewCategory">
                            <p className="children">Adicionar Categoria</p>
                        </Link>
                    </ButtonAdd>                
            </div>

            {categories.map(category => 
                <Accordion title={category.name} key={category.id}>
                    <div className="content">
                    <div className="contentPicture">
                        <FiCamera className="camera"/>
                    </div>
                    <div className="contentText">
                        <h2>Batata Frita</h2>
                        <p>Batata Frita, Cheddar e Bacon</p>
                    </div>
                    <div className="contentButtons">
                        <input type="text"></input>
                        <button>
                            <p>Excluir</p>
                        </button>
                        <button>
                            <p>Editar</p>
                        </button>
                    </div>  
                </div>

                <div className="content">
                    <div className="contentPicture">
                        <FiCamera className="camera"/>
                    </div>
                    <div className="contentText">
                        <h2>Calabresa</h2>
                        <p>Calabresa e Cebola</p>
                    </div>
                    <div className="contentButtons">
                        <input type="text"></input>
                        <button>
                            <p>Excluir</p>
                        </button>
                        <button>
                            <p>Editar</p>
                        </button>
                    </div>  
                </div>
                <Link to="/NewItem">
                    <ButtonAdd>
                        <p className="children"> Adicionar Item </p>
                    </ButtonAdd>
                </Link>
                </Accordion>
                )}   
        </div>
    );
}

export default Item;
