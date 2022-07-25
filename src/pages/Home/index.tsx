import styled from '@emotion/styled';
import React from 'react';
import Hero from '@components/Home/Hero';

const Container = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  justify-content: center;
`;

const Home = () => {
  return (
    <Container>
      <Hero />
    </Container>
  );
};

export default Home;
