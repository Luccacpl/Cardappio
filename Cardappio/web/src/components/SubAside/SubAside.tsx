import React from 'react'

import { DivContainer, DivTitle, Title, SubTitle, SubMenu, TitleSubMenu, UlMenu, LiMenu, AddButton } from './style'

interface ISubAside {
    clicked?: any
}

function SubAside(props: ISubAside){
    return(
        <DivContainer>
            <DivTitle>
                <Title>Categorias</Title>
                <SubTitle>16 Categorias achadas</SubTitle>
            </DivTitle>
            <SubMenu>
                <TitleSubMenu>Categorias</TitleSubMenu>
                <UlMenu>
                    <LiMenu>Bebidas</LiMenu>
                    <LiMenu>Porções</LiMenu>
                    <LiMenu>Frangos</LiMenu>
                    <LiMenu>Carnes</LiMenu>
                </UlMenu>
                <AddButton onClick={props.clicked}>+ Adicionar nova categoria</AddButton>
            </SubMenu>
        </DivContainer>
    );
}

export default SubAside;