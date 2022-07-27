import styled from '@emotion/styled';
import React from 'react';
import FeatureTiles from '@components/Home/FeatureTiles';
import CustomerTestimonials from '@components/Home/CustomerTestimonials';
import Hero from '@components/Home/Hero';

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
      <CustomerTestimonials />
    </Container>
  );
};

export default Home;
