import Svg from 'components/Svg/Svg'
import React from 'react'
import { dimensions } from 'utils'

import SearchSvg from '../../public/icons/search-outline.svg'

import { CustomInput, DivInput, SearchDiv, AddButton } from './style'

interface ISearchInput {
    placeholder?: string
    addButton?: string
}

const SearchInput = (props: ISearchInput) => {
    return(
        <DivInput>
            <CustomInput placeholder={props.placeholder}>
            </CustomInput>
            <SearchDiv>
            <Svg src={SearchSvg}  height={dimensions.spacing20} color="white" textAlign="center"/>
            </SearchDiv>
            <AddButton>{props.addButton}</AddButton>
        </DivInput>
    );
}

export default SearchInput;