import React from 'react'
import styled from 'styled-components';

import Categories from '../utils/categoriesDummy';

const HorizontalCategories = () => {
    return (
        <>
        <Container>
            <DataContainer>
                <Item source='https://www.timbrit.cl/blog/wp-content/uploads/2020/08/Graphic-eyeliner-maquillaje-de-ojos-683x1024.jpg' text='Maquillaje'/>
            </DataContainer>
            <DataContainer>
                <Item source='https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoModeloWebRedes/210092120_fotomodelo.jpg' text='Labiales'/>
            </DataContainer>
            <DataContainer>
                <Item source='http://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652' text='Lapices'/>
            </DataContainer>
            <DataContainer>
                <Item source='https://previews.123rf.com/images/loonara/loonara1607/loonara160700010/60728836-maquillaje-profesional-pinceles-y-herramientas-de-recolección-maquillaje-productos-que-figuran-en-el-cu.jpg' text='Pinceles'/>
            </DataContainer>
            <DataContainer>
                <Item source='https://smoda.elpais.com/wp-content/uploads/2017/04/tarte-cosmetics-facebook.jpg' text='Cosmeticos'/>
            </DataContainer>
            <DataContainer>
                <Item source='https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_curiosidad__small/public/articulos/caducidad_maquillaje_p_0.jpg' text='Polvos'/>
            </DataContainer>
        </Container>
        </>
    )
};

const Item = ({source, text}) => {
    return(
        <ImageContainer>
            <Image src={source}/>
            <Text>{text}</Text>
        </ImageContainer>
    )
}

const Container = styled.div`
    display: flex;
    overflow-x: auto;
    max-width: 90vh;

    &::-webkit-scrollbar{
        width: 0;
    }
`;

const DataContainer = styled.div`
    min-width: 100px;
    /*height: 100px; */
    margin: 10px;
`;

const ImageContainer = styled.div`
    position: relative;
`;

const Image = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
`;

const Text = styled.div`
    position: absolute;
    bottom: 0;
    margin: 10px;
    color: white;
    font-weight: bold;
`;

export default HorizontalCategories
