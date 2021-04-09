import React from 'react'
import styled from 'styled-components';

import SearchIcon from '../assets/search_icon.svg';

const SearchInput = () => {
    return (
        <InputButton>
            <Input 
                placeholder='Busca tus productos'
            />
            <SearchButton>
                <img src={SearchIcon} alt='icon'/>
            </SearchButton>
        </InputButton>
    )
}

const InputButton = styled.div`
    position: relative;
`;

const Input = styled.input`
    border-radius: 20px;
    border: 0;
    outline: none;
    width: 80%;
    padding: 16px 25px;
    background: rgb(243, 245, 249);
`;

const SearchButton = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    cursor: pointer;
    border-radius: 0 20px 20px 0;
    border: 0;
    border-left: 1px solid lightgray;
    background: rgb(243, 245, 249);
    outline: none;

    img {
        width: 25px;
        padding: 5px 10px;
        margin-left: 10px;
    }
`;

export default SearchInput
