import React from 'react';
import styled from 'styled-components';

import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Container>
      <Navbar />
      <BodyContainer>
        <LeftSide>
          <Sidebar />
        </LeftSide>
        <RightSide>
          <Main />
        </RightSide>
      </BodyContainer>
    </Container>
  )
}

const Container = styled.div`
  background: rgb(248, 249, 250);
`

const BodyContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-top: 20px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App
