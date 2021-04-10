import React from 'react'
import styled from 'styled-components'

const Review = ({review}) => {
    return (
        <ReviewContainer>
            <ContentContainer>
                <Image src={review.imgUrl} alt='img'/>
                <TitleContainer>
                    <Title>
                        <TitleText>{review.name}</TitleText>
                        <SubTitleText>{review.category}</SubTitleText>
                    </Title>
                    <Duration>
                        <SubTitleText>{review.duration}</SubTitleText>
                    </Duration>
                </TitleContainer>
                <ProductContainer>
                    <ProductDataContainer>
                        <ItemImage src={review.productUrl}/>
                        <InfoContainer>
                            <TitleText black>{review.productTitle}</TitleText>
                            <SubTitleText gray>{review.productDescription}</SubTitleText>
                            <SubTitleText gray>${review.price}</SubTitleText>
                        </InfoContainer>
                    </ProductDataContainer>
                </ProductContainer>
            </ContentContainer>
        </ReviewContainer>
    )
}

const ReviewContainer = styled.div`
    height: 300px;
    margin: 40px 0;
    padding: 20px;

    @media (max-width: 1300px){
        height: 300px;
        margin: 0 15px;
        padding: 0;
    }
`;

const ContentContainer = styled.div`
    position: relative;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    padding: 15px;
    width: 90%;
`;

const ProductContainer = styled.div`
    position: absolute;
    width: 90%;
    height: 80px;
    background: white;
    border-radius: 10px;
    bottom: 0;
    margin: 10px;
`;

const ProductDataContainer = styled.div`
    display: flex;
    padding: 5px;
    align-items: center;
`;

const InfoContainer = styled.div`

`;

const ItemImage = styled.img`
    width: 50px;
    margin-right: 5px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
`;

const Duration = styled.div`
    display: flex;
`;

const TitleText = styled.h4`
    color: ${props => props.black ? 'black' : 'white'};
`;

const SubTitleText = styled.h4`
    color: ${props => props.gray ? 'gray' : 'white'};
    font-size: 13px;
    font-weight: 400;
`;

const Image = styled.img`
    max-width: 100%;
    border-radius: 10px;
    object-fit: cover;
`;

export default Review
