import React from 'react';
import { Link } from 'react-router-dom';

import { Title, SubTitle, P } from 'components/Text/text';
import { colors } from '../../utils/colors';
import { fontsSizes } from '../../utils/fontSizes';
import { Body, ContainerLeft, ContainerRight, BtnDiv, Linha } from '../Login/styles';
import { dimensions } from 'utils';

import Button from '../../components/Button/Button';
import { Input } from 'components/Input/Input';

function Cadastro() {
    return (
        <Body>
            <ContainerLeft overflow="scroll">
                <Title
                    fontFamily="Quicksand"
                    color={colors.menuOrange}
                    fontSize={fontsSizes.large30}
                    marginTop={dimensions.spacing56}
                >
                    Cardappio
                </Title>
                <SubTitle
                    color={colors.green}
                    fontSize={fontsSizes.large18}
                    fontWeight="400"
                >
                    Faça seu cadastro
                </SubTitle>
                <P
                    color={colors.white}
                    fontSize={fontsSizes.small14}
                    marginTop={dimensions.spacing16}
                >
                    Complete os campos abaixo para realizar o cadastro!
                </P>
                <Input
                    placeholder="Digite seu nome"
                    marginTop="36px"
                />
                <Input
                    placeholder="Digite seu sobrenome"
                    marginTop="36px"
                />
                <Input
                    placeholder="Digite seu email"
                    marginTop="36px"
                />
                <Input
                    placeholder="Digite sua senha"
                    marginTop="36px"
                />
                <Input
                    placeholder="Data de nascimento"
                    marginTop="36px"
                />
                <Input
                    placeholder="Nome do restaurante"
                    marginTop="36px"
                />

                <Button
                    content="Cadastrar"
                    width="100%"
                    marginTop="36px"
                />

                <Linha></Linha>

                <P
                    color={colors.white}
                    marginTop="32px"
                    textAlign="center"
                >
                    Ja possui uma conta?
                </P>
                <Link style={{ textDecoration: "none" }} to="/">
                    <P
                        color={colors.menuOrange}
                        fontSize={fontsSizes.small14}
                        fontWeight="500"
                        marginTop="1.425rem"
                        textAlign="center"
                    >
                        Entre agora mesmo!
                    </P>
                </Link>

            </ContainerLeft>
            <ContainerRight></ContainerRight>
        </Body>
    );
}

export default Cadastro;