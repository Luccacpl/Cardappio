import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FiCamera } from 'react-icons/fi';

import Aside from '../../components/Aside/Aside';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';

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
            <Aside />
            <div className="btnAdd">
                <Link to="/NewCategory">
                    <ButtonAdd content="Adicionar Categoria" />
                </Link>
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
                                <ButtonAdd content="Adicionar Item" />
                            </Link>
                        </div>
                    )}
                </div>

            )}
        </div>
    );
}

export default Item;
