import styled from '@emotion/styled';
import React from 'react';
import Hero from '@components/Home/Hero';
import FeatureTiles from '@components/Home/FeatureTiles';

const Container = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  display: grid;
`;

const Home = () => {
  return (
    <Container>
      <Hero />
      <FeatureTiles />
    </Container>
  );
};

export default Home;
