import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import styled from 'styled-components';

import Overview from './Overview';
import Products from './Products';
import Reviews from './Reviews';
import DotsIcon from '../assets/dots_icon.svg';
import InfoIcon from '../assets/info_icon.svg';
import TvIcon from '../assets/tv_icon.svg';

const Menu = () => {
    return (
    <Fragment>
        <Router>
            <MenuContainer>
                <Nav>
                    <Item>
                        <img src={DotsIcon}/>
                        <Link to="/">Productos</Link>
                    </Item>
                    <Item>
                        <img src={InfoIcon}/>
                        <Link to="/reviews">Reviews</Link>
                    </Item>
                    <Item>
                        <img src={TvIcon}/>
                        <Link to="/overview">Overview</Link>
                    </Item>
                </Nav>
            </MenuContainer>
            <Switch>
                <Route exact path="/" component={Products} />
                <Route exact path="/reviews" component={Reviews} />
                <Route exact path="/overview" component={Overview} />
            </Switch>
        
        </Router>
    </Fragment>
    )
}

const MenuContainer = styled.div`
    background: rgb(243,245,249);
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    a {
        text-decoration: none;
        margin-left: 10px;
        color: rgb(161,161,165);
        font-size: 18px;
    }
`;

export default Menu
