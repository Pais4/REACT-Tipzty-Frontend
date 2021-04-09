import React from 'react';
import styled from 'styled-components';

import RightIcon from '../assets/right_icon.svg';

const CategoryName = ({icon, category}) => {
    return (
        <CategoryContainer>
            <Logo src={icon} alt='icon'/>
            <h2>{category}</h2>
            <Arrow src={RightIcon} alt='icon'/>
        </CategoryContainer>
    )
}

const CategoryContainer = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.6em;

    h2{
        color: #526378;
        align-self: flex-end;
    }
`;

const Logo = styled.img`
    
`;

const Arrow = styled.img`

`;

export default CategoryName
