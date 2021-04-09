import React from 'react'
import styled from 'styled-components'

const ProfileButton = ({text, color, back}) => {
    return (
        <ButtonsContainer color={color} back={back}>
            {text}
        </ButtonsContainer>
    )
}

const ButtonsContainer = styled.button`
    padding: 1em 1em;
    border-radius: 10px;
    background: ${props => props.color};
    color: ${props => props.back ? 'black' : 'white'};
    border: ${props => props.back ? '1px solid lightgray' : '0'};
    font-weight: bold;
    margin: 0 1em;
    margin-bottom: 30px;
    outline: none;
    cursor: pointer;
`;

export default ProfileButton
