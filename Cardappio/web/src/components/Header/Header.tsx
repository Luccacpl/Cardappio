import React from 'react'

import { colors } from '../../utils/colors'
import { dimensions } from '../../utils/dimensions'
import { fontsSizes } from '../../utils/fontSizes'
import { P, Title, SubTitle } from '../../components/Text/text'
import SearchInput from '../SearchInput/SearchInput'

import { Circle } from './style';

import { LiMenu, AddButton } from '../../components/SubAside/style'

import { Link } from 'react-router-dom';

import Container from '../Container/Container';

interface IHeader {
    title?: string
    subtitle?: string
    placeholder?: string
    addButton?: string
}

const Header = (props: IHeader) => {
    return (
        <Container
            width="100%"
            height="224px"
            padding="0px 64px 0px 64px"
            backgroundColor={colors.green}
            justifyContent="initial"
        >
            <Container
                width="100%"
                height="60%"
                backgroundColor="transparent"
                padding="0px"
                display="flex"
            >
                <Circle />
                <Title>
                    {props.title}
                </Title>
                <SubTitle>
                    {props.subtitle}
                </SubTitle>
            </Container>

            <Container
                width="100%"
                height="40%"
                backgroundColor="transparent"
                padding="0px"
            >
                <SearchInput placeholder={props.placeholder} addButton={props.addButton}/>
            </Container>
        </Container>
    );
}

export default Header;