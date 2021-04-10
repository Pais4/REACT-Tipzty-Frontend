import React from 'react'
import styled from 'styled-components'

import Categories from '../utils/categoriesDummy';
import HorizontalCategories from './HorizontalCategories';
import Product from './Product';

const Products = () => {
    return (
        <>
            <HorizontalCategories />
            <ProductsContainer>
                <ProductsGrid>
                    {
                        Categories.map(category => (
                            <Product category={category}/>
                        ))
                    }
                </ProductsGrid>
            </ProductsContainer>
        </>
    )
}

const ProductsContainer = styled.div`
    overflow-x: auto;
    max-width: 90vh;
    height: 300px;

    &::-webkit-scrollbar{
        width: 0;
    }
`;

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    justify-items: center;
`;

export default Products
