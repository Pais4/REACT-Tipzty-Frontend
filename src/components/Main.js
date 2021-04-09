import React from 'react'
import styled from 'styled-components'

import VerifiedIcon from '../assets/brand_verify_icon.svg';
import Menu from './Menu';
import ProfileButton from './ProfileButton';
import ProfileData from './ProfileData';

const profile = {
    name: 'Tonymoly Colombia',
    account: '@tonymoly.col',
    profileImgUrl: 'https://www.crearlogogratisonline.com/images/crearlogogratis_1024x1024_01.png',
    imgUrl: 'https://i.pinimg.com/736x/39/35/d5/3935d57aa35a45fa2b373de68d226ed6.jpg',
    followers: '120',
    reviews: '120',
    products: '120',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a volutpat lectus, eget porttitor turpis. Vestibulum tellus dui, porta vel metus non, eleifend vehicula diam. Curabitur venenatis maximus rhoncus.'
}

const Main = () => {
    return (
        <Container>
            <ProfileContainer>
                <ProfileImage src={profile.imgUrl}/>
                <ProfileInfoContainer>
                    <DisplayInfo>
                        <ProfileInfo>
                            <LogoContainer>
                                <img src={profile.profileImgUrl}/>
                            </LogoContainer>
                            <NameContainer>
                                <h3>{profile.name}</h3>
                                <p>{profile.account}</p>
                            </NameContainer>
                            <VerifiedContainer>
                                <img src={VerifiedIcon} alt='icon'/>
                            </VerifiedContainer>
                        </ProfileInfo>
                        <ProfileDataContainer>
                            <ProfileData data={profile.followers} name='followers'/>
                            <ProfileData data={profile.reviews} name='reviews'/>
                            <ProfileData data={profile.products} name='products'/>
                        </ProfileDataContainer>
                    </DisplayInfo>
                    <AccountInfo>
                        <p>{profile.description}</p>
                    </AccountInfo>
                    <ButtonsContainer>
                        <ProfileButton text='EDITAR PERFIL' color='#8235F6'/>
                        <ProfileButton text='COMPARTIR TIENDA' color='white' back={true}/>
                    </ButtonsContainer>
                </ProfileInfoContainer>
            </ProfileContainer>
            <Menu />
        </Container>
    )
}

const Container = styled.div`
    width: 100%
`;
             
const ProfileContainer = styled.div`
    position: relative;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 15px;
`;

const ProfileInfoContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background: white;
    border-radius: 20px 20px 0 0;
`;

const DisplayInfo = styled.div`
    display: flex;
    padding: 1em 1em;
    justify-content: space-between;
`;

const ProfileInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileDataContainer = styled.div`
    display: flex;
`;

const LogoContainer = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 60px;
    border: 1px solid lightgray;
    padding: 5px;
    img{
        width: 100%;
    }
`;

const NameContainer = styled.div`
    margin: 0 1em;
    align-self:flex-start;

    h3{
        margin-bottom: 10px;
    }

    p {
        color: rgb(161,162,165);
    }
`;

const VerifiedContainer = styled.div`
    align-self:flex-start;
`;

const AccountInfo = styled.div`
    padding: 0 20px;
    p{
        color: rgb(161,162,165);
        margin-bottom: 30px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
`;

export default Main
