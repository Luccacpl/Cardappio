import React, { useState, useEffect } from 'react'
import EditSVG from '../../public/icons/create-outline.svg'
import TrashSVG from '../../public/icons/trash-outline.svg'

import { DivContainer, DivTitle, Title, SubTitle, SubMenu, TitleSubMenu, UlMenu, LiMenu, AddButton } from './style'

import api from '../../services/api';
import { Link } from 'react-router-dom';
import Svg from '../Svg/Svg'
import { createUnparsedSourceFile } from 'typescript';

interface ISubAside {
    clicked?: any
}

interface ICategory {
    name: string
    id: number
}

function SubAside(props: ISubAside) {

    const [categories, setCategories] = useState<ICategory[]>([]);
    const [refresh, setRefresh] = useState(0);
    
    const tamanho = categories.length;
    


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
                console.log(categories);
            })
        }
        GetApi();
    }, [refresh])


    return (
        <DivContainer>
            <DivTitle>
                <Title>Categorias</Title>
                <SubTitle>{tamanho} Categorias achadas</SubTitle>
            </DivTitle>
            <SubMenu>
                <TitleSubMenu>Categorias</TitleSubMenu>
                <UlMenu>
                    {categories.map(category => 
                        <> <LiMenu>
                                <Svg src={TrashSVG} width="3rem" height="1.5rem" onClick={() => handleDelete(category.id)} />
                            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Svg src={EditSVG} width="3rem" height="1.5rem" />
                            </Link>
                            {category.name}
                        </LiMenu></>
                    )}
                </UlMenu>
                <AddButton onClick={props.clicked}>+ Adicionar nova categoria</AddButton>
            </SubMenu>
        </DivContainer>
    );
}

export default SubAside;


//<Link to="/NewCategory"> </Link>