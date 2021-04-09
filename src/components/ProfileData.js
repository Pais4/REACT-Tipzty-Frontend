import React from 'react'
import styled from 'styled-components'

const ProfileData = ({data, name}) => {
    return (
        <Container>
            <h3>{data}</h3>
            <p>{name}</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;

    p {
        font-size: 11px;
        margin-top: 5px;
        text-transform: uppercase;
    }
`;

export default ProfileData
