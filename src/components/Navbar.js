import React from 'react'
import styled from 'styled-components';

import StoreIcon from '../assets/store_icon.svg';
import SearchIcon from '../assets/search_icon.svg';
import BarsIcon from '../assets/bars_solid.svg';
import DownIcon from '../assets/sort_down.svg';
import PlusIcon from '../assets/plus_solid.svg';
import PlaneIcon from '../assets/paper_plane.svg';
import BellIcon from '../assets/bell.svg';
import UserIcon from '../assets/user.svg';

const Navbar = () => {
    return (
        <Nav>
            <LeftSide>
                <Item src={BarsIcon} alt='icon'/>
                <ChooseAccount>
                    <p>Tonymolycolombia</p>
                    <img src={DownIcon} alt='icon'/>
                </ChooseAccount>
            </LeftSide>
            <RigthSide>
                <InputButton>
                    <Input 
                        placeholder='Busca reviews, influentes y productos'
                    />
                    <SearchButton>
                        <img src={SearchIcon} alt='icon'/>
                    </SearchButton>
                </InputButton>
                <PlusButton>
                    <img src={PlusIcon} alt='icon'/>
                </PlusButton>
                <Item src={StoreIcon} alt='icon'/>
                <Item src={PlaneIcon} alt='icon'/>
                <Item src={BellIcon} alt='icon'/>
                <Account>
                    <AccountLogo src={UserIcon} alt='icon'/>
                    <AccountArrow src={DownIcon} alt='icon'/>
                </Account>
            </RigthSide>
        </Nav>
    )
}

const Nav = styled.div`
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #FFF;
`;

const LeftSide = styled.div`
    display: flex;
    align-items: center;
`;

const ChooseAccount = styled.div`
    display: flex;
    align-items: center;

    p{
        margin: 0 15px
    }

    img{
        width: 10px;
    }
`;

const RigthSide = styled.div`
    display: flex;
    align-items: center;
`;

const InputButton = styled.div`
    position: relative;
    margin: 0 1rem;
`;

const Input = styled.input`
    border-radius: 20px;
    border: 0.5px solid lightgray;
    outline: none;
    width: 20rem;
    padding: 10px 15px;
`;

const SearchButton = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    cursor: pointer;
    border-radius: 0 20px 20px 0;
    border: 0.5px solid lightgray;
    background: rgb(248, 249, 250);
    outline: none;
    img {
        width: 25px;
        padding: 5px 10px
    }
`;

const PlusButton = styled.div`
    background: rgb(248, 249, 250);
    border-radius: 30px;
    padding: 8px 10px;
    margin: 0 20px;
    cursor: pointer;

    img {
        width: 20px;
    }
`;

const Item = styled.img`
    width: 1.4rem;
    margin: 0 20px;
    cursor: pointer;
`;

const AccountLogo = styled.img`
    width: 20px;
    margin-right: 10px;
`;

const AccountArrow = styled.img`
    width: 10px;
`;

const Account = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 5px 20px;
`;

export default Navbar
