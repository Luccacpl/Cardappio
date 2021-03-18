import React from 'react';

import { colors } from '../../utils/colors';
import { fontsSizes } from '../../utils/fontSizes';
import { Title, SubTitle, P } from 'components/Text/text';
import { Body, ContainerLeft, ContainerRight, BtnDiv, Linha } from './styles';
import { dimensions } from 'utils';
import { Input } from 'components/Input/Input';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';




function Login() {
    return (
        <Body>
            <ContainerLeft>
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
                    Seja Bem-vindo!
                </SubTitle>
                <P
                    color={colors.white}
                    fontSize={fontsSizes.small14}
                    marginTop={dimensions.spacing16}
                >
                    Por favor faça o seu login para ter acesso!
                </P>
                <Input
                    placeholder="Digite seu email"
                    marginTop="36px"
                    marginTopResponsive="64px"
                />
                <Input
                    placeholder="Digite a sua senha"
                    marginTop="12px"
                    marginTopResponsive="24px"
                />
                <BtnDiv>
                    <Button
                        content="Entrar"
                        width="50%"
                        marginTop="1rem"
                    />
                    <Link style={{textDecoration: "none"}} to="/">
                        <P
                            color={colors.menuOrange}
                            fontSize={fontsSizes.small14}
                            fontSizeResponsive={fontsSizes.large18}
                            fontWeight="500"
                            marginTop="1.425rem"
                            marginLeft="20px"
                            marginLeftResponsive="60px"
                        >
                            Esqueceu a senha?
                    </P>
                    </Link>
                </BtnDiv>
                <Linha></Linha>
                <P
                    color={colors.white}
                    marginTop="32px"
                    textAlign="center"
                >
                    Ainda não tem a sua conta?
                </P>
                <Link style={{textDecoration: "none"}} to="/cadastro">
                        <P
                            color={colors.menuOrange}
                            fontSize={fontsSizes.small14}
                            fontWeight="500"
                            marginTop="1.425rem"
                            textAlign="center"
                        >
                            Crie agora mesmo!
                    </P>
                    </Link>
            </ContainerLeft>
            <ContainerRight></ContainerRight>
        </Body>
    );
}

export default Login;