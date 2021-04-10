import React from 'react'
import styled from 'styled-components'

import DiscountImg from '../assets/label_off.svg';

const Product = ({category}) => {
    return (
        <Container>
            { 
                category.IsIndiscount &&
                <DiscountContainer>
                    <ImgTextContainer>
                        <DiscountImage src={DiscountImg} alt='icon'/>
                        <Text>{category.discountAmmount}% OFF</Text>
                    </ImgTextContainer>
                </DiscountContainer>
            }
            <ImageContainer>
                <Image src={category.imgUrl} alt='Product Image'/>
            </ImageContainer>
            <InfoContainer>
                <Title><span>{category.name}</span> {category.description}</Title>
                <Price>$ {category.price}</Price>
            </InfoContainer>
        </Container>
    )
}

const Container = styled.div`
    height: 350px;
    width: 180px;
    border: 1px solid rgb(248, 249, 250);
    border-radius: 10px;
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const DiscountContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

const DiscountImage = styled.img`
`;

const ImgTextContainer = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
`;

const Text = styled.div`
    position: absolute;
    top: 0;
    padding: 3px;
    color: white;
    font-weight: bold;
    font-size: 14px;
`;

const ImageContainer = styled.div`
    height: 220px;
    width: 160px;
    border-radius: 10px;
    display: flex;
    margin: 5px 5px;
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

const InfoContainer = styled.div`
    margin-top: 10px;
`;

const Title = styled.p`
    text-align: center;
    font-weight: 200;
    span{
        font-weight: bold;
    }
`;

const Price = styled.p`
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
`;

export default Product
