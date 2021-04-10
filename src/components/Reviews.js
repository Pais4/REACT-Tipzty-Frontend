import React from 'react'
import styled from 'styled-components';

import HorizontalCategories from './HorizontalCategories'
import ReviewsDummy from '../utils/reviewsDummy';
import Review from './Review';

const Reviews = () => {
    return (
        <>
            <HorizontalCategories />
            <ProductsContainer>
                <ProductsGrid>
                    {
                        ReviewsDummy.map(review => (
                            <Review review={review}/>
                        ))
                    }
                </ProductsGrid>
            </ProductsContainer>
        </>
    )
}

const ProductsContainer = styled.div`
    overflow-x: auto;
    max-width: 95vh;
    height: 300px;

    &::-webkit-scrollbar{
        width: 0;
    }
`;

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
`;

export default Reviews
