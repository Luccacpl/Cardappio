import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FiCamera } from 'react-icons/fi';

import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';

import './Item.css';

import api from '../../services/api';

interface ICategory {
    name: string,
    id: number
}

function Item() {



    const [categories, setCategories] = useState<ICategory[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [refresh, setRefresh] = useState(0);

    async function handleDelete(id: number) {

        await api.delete('/category/' + id)
        setRefresh(chave => chave + 1)
        console.log(id);

        alert('Categoria deletada com sucesso!');

    }

    useEffect(() => {
        function GetApi() {
            api.get<ICategory[]>('/category').then(response => {
                setCategories(response.data)
                console.log(response.data);
            })
        }
        GetApi();
    }, [refresh])

    return (
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
                <div className="accordionSection" >
                    <div className="accordionHeader">
                        <h1>{category.name}</h1>
                        <button className="btnExcluir" onClick={() => handleDelete(category.id)}>
                            <p>Excluir</p>
                        </button>
                        <button className="btnEditar">
                            <p>Editar</p>
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="btnAccordion">
                            {isOpen ? (<p>Reduzir</p>) : (<p>Ampliar</p>)}
                        </button>
                    </div>
                    {isOpen && (
                        <div className="accordionContent">
                            <div className="content">
                                <div className="contentPicture">
                                    <FiCamera className="camera" />
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
                                    <FiCamera className="camera" />
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
                        </div>
                    )}
                </div>

            )}
        </div>
    );
}

export default Item;
