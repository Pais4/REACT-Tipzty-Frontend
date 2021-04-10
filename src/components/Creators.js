import React from 'react'
import styled from 'styled-components'

import VerifiedIcon from '../assets/brand_verify_icon.svg';

const Creators = ({user, margin}) => {

    console.log(user);

    return (
        <Container margin={margin}>
            <ImgContainer>
                <ImgProfile src={user.imgUrl}/>
            </ImgContainer>
            <InfoContainer>
                <p>{user.name}</p>
                <p><span>{user.userAccount}</span></p>
            </InfoContainer>
            <Icon src={VerifiedIcon}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    margin: ${props => props.margin ? '0' : '1.2em 0'};
`;

const ImgContainer = styled.div`
    border: 2px solid rgb(130,53,246);
    width: 60px;
    height: 60px;
    border-radius: 60px;
    display: flex;
    padding: 5px 5px;
    justify-content: center;
`;

const ImgProfile = styled.img`
    width: 100%;
    border-radius: 100px;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    margin: 0 1em;

    p{
        margin-top: 3px;
    }

    p > span {
        color: rgb(161,162,165);
    }
`;

const Icon = styled.img`
    align-self: flex-start;
`;

export default Creators
