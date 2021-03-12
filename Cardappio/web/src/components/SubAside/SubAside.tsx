import React, { useState, useEffect } from 'react'
import EditSVG from '../../public/icons/create-outline.svg'
import TrashSVG from '../../public/icons/trash-outline.svg'

import { DivContainer, DivTitle, Title, SubTitle, SubMenu, TitleSubMenu, UlMenu, LiMenu, AddButton } from './style'

import api from '../../services/api';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import Svg from '../Svg/Svg'

interface ISubAside {
    clicked?: any
    title: string
}

interface ICategory {
    name: string
    id: number
}

function SubAside(props: ISubAside) {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [refresh, setRefresh] = useState(0);

    const tamanho = categories.length;

    const location = useLocation();
    console.log(location.pathname);

    async function handleDelete(id: number) {
        await api.delete('/category/' + id)
        setRefresh(chave => chave + 1)
        console.log(id);

        alert('Categoria deletada com sucesso!');
    }


    useEffect(() => {
        function GetApi() {
            api.get<ICategory[]>('/category').then(response => {
                setCategories(response.data);
                console.log(response.data);
            })
        }
        GetApi();
    }, [refresh])


    return (
        <DivContainer>
            <DivTitle>
                <Title>{props.title}</Title>
                <SubTitle>{tamanho} {props.title} achadas</SubTitle>
            </DivTitle>
            <SubMenu>
                <TitleSubMenu>{props.title}</TitleSubMenu>
                <UlMenu>
                    {location.pathname === '/item' ?
                        categories.map(category =>
                            <> <LiMenu>
                                <Svg src={TrashSVG} width="3rem" height="1.5rem" onClick={() => handleDelete(category.id)} />
                                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <Svg src={EditSVG} width="3rem" height="1.5rem" />
                                </Link>
                                {category.name}
                            </LiMenu></>
                        ) : null
                    }
                </UlMenu>
                <AddButton onClick={props.clicked}>+ Adicionar nova categoria</AddButton>
            </SubMenu>
        </DivContainer>
    );
}

export default SubAside;




//<Link to="/NewCategory"> </Link>