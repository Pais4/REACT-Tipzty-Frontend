import React, { Fragment } from 'react';
import styled from 'styled-components';

import CategoryName from './CategoryName';
import SearchInput from './SearchInput';
import Creators from './Creators';
import Users from '../utils/usersDummy';
import StarsIcon from '../assets/starts_icon.svg';
import DownIcon from '../assets/down_icon.svg';

const Sidebar = () => {
    return (
        <Fragment>
            <SearchInput />
            <CategoryName icon={StarsIcon} category='Explorar todo'/>
            <CategoryName icon={StarsIcon} category='Categorias'/>
            <CategoryName icon={StarsIcon} category='Ofertas'/>
            <CategoryName icon={StarsIcon} category='Lo nuevo'/>
            <SubTitle>
                <h2>Tus Creadores</h2>
            </SubTitle>
            <CreatorsContainer>
                {
                    Users.map(user => (
                        <Creators key={user.id} user={user}/>
                    ))
                }
            </CreatorsContainer>
            <SeeAllContainer>
                <h3>Ver todo</h3>
                <img src={DownIcon} alt='icon'/>
            </SeeAllContainer>
        </Fragment>
    )
}

const SubTitle = styled.div`
    margin-top: 1.8em;
    
    h2 {
        color: #526378;
    }
`;

const CreatorsContainer = styled.div`
    margin-top: 20px;
`;

const SeeAllContainer = styled.div`
    margin-bottom: 30px;
    display: flex;
    align-items: center;

    h3 {
        color: rgb(130,53,246);
        font-size: 22px;
    }

    img{
        width: 16px;
        margin-left: 16px;
    }
`;

export default Sidebar
