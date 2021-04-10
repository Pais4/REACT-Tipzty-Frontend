import React from 'react'
import styled from 'styled-components'

import StoreIcon from '../assets/store.svg';
import MarkerIcon from '../assets/marker_icon.svg';
import TvReviews from '../assets/tv_reviews.svg';
import CalendarIcon from '../assets/calendar_icon.svg';
import ClockIcon from '../assets/clock_icon.svg';
import TruckIcon from '../assets/truck_icon.svg';
import BoxBack from '../assets/box_back.svg'
import BoxError from '../assets/box_error.svg'
import ChartsIcon from '../assets/charts_icon.svg';
import CreatorBox from './CreatorBox';
import Users from '../utils/usersDummy';


const Overview = () => {
    return (
        <Container>
            <ContentContainer>
                <Title>Descripción</Title>
                <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a volutpat lectus, eget porttitor turpis. Vestibulum tellus dui, porta vel metus non, eleifend vehicula diam. Curabitur venenatis maximus rhoncus.</Content>
            </ContentContainer>
            <Separator />
            <ContentContainer>
                <Title>Sobre la marca</Title>
                <Brand title='Tipo de empresa' icon={StoreIcon} text='Distribuidora internacional verificada'/>
                <Brand title='Sucursales en' icon={MarkerIcon} text='Medellín, Bogota, Cali'/>
                <Brand title='Tipo de empresa' icon={TvReviews} text='Más de 2000 Reviews'/>
                <Brand title='Tipo de empresa' icon={CalendarIcon} text='6 de Diciembre 2019'/>
            </ContentContainer>
            <Separator />
            <ContentContainer>
                <Title>Indicadores</Title>
                <Brand title='Tiempo de respuesta' icon={ClockIcon} text='Indice de respuesta 90%' infoText='Alto'/>
                <Brand title='Tiempo de envío' icon={TruckIcon} text='Duración del envio de 1 a 3 días' infoText='Rápido'/>
                <Brand title='Devoluciones' icon={BoxBack} text='Índice de devoluciones 9%' infoText='Bajo'/>
                <Brand title='Cancelaciones' icon={BoxError} text='Índice de cancelaciones 2%' infoText='Bajo'/>
                <Brand title='Actividad de vendedores' icon={ChartsIcon} text='Más de 50 reviews por semana' infoText='Alto'/>
            </ContentContainer>
            <Separator />
            <ContentContainer>
                <Title>Creadores</Title>
                {
                    Users.map(user => (
                        <CreatorBox key={user.id} user={user} />
                    ))
                }
            </ContentContainer>
        </Container>
    )
}

const Brand = ({title, text, icon, infoText}) => {
    return(
        <FlexContainer>
            <InfoContainer>
                <Icon src={icon}/>
                <Text>{title}</Text>
                <GreenText>{infoText}</GreenText>
            </InfoContainer>
            <Content>{text}</Content>
        </FlexContainer>
    )
}

const Container = styled.div`
    background: #FFF;
`;

const ContentContainer = styled.div`
    padding: 20px;
`;

const Title = styled.h4`
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 20px;
`;

const Content = styled.p`
    margin: 10px 0;
    color: rgb(161,162,165);
`;

const Separator = styled.hr`
    border: 1px solid rgb(248, 249, 250);
`;

const InfoContainer = styled.div`
    display: flex;
    margin: 15px 0;
    align-items: center;
`;

const Icon = styled.img`
    margin-right: 10px;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Text = styled.p`
    
`;

const GreenText = styled.p`
    color: rgb(58,193,168);
    font-size: 12px;
    margin-left: 20px;

`;





const AboutBranch = styled.div`
    
`;

export default Overview
