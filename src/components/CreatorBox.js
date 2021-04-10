import React from 'react'
import styled from 'styled-components'
import Creators from './Creators';

const CreatorBox = ({user}) => {
    return (
        <BoxContainer>
            <Container>
                <Profile>
                    <Creators user={user} margin={true}/>
                </Profile>
                {
                    user.following
                    ?
                        <FollowingButton>
                            Siguiendo
                        </FollowingButton>
                    :
                        <NotFollowingButton>
                            Seguir
                        </NotFollowingButton>
                }
            </Container>
        </BoxContainer>
    )
}

const BoxContainer = styled.div`
    width: 90%;
    height: 90px;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 15px 0;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`;

const Profile = styled.div`
`;

const FollowingButton = styled.button`
    padding: 5px 10px;
    background: none;
    border: 1px solid rgb(153,93,247);
    color: rgb(153,93,247);
    border-radius: 20px;
    outline: none;
    cursor: pointer;
`;

const NotFollowingButton = styled.button`
    padding: 5px 20px;
    background: rgb(153,93,247);
    border: 0;
    color: #FFF;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
`;

export default CreatorBox
