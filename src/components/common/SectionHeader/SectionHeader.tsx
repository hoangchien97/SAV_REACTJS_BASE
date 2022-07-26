import styled from '@emotion/styled';
import React from 'react';

interface Props {
  title: string;
  description: string;
}

const Section = styled.section`
  max-width: 620px;
  width: 100%;
  margin: 0 auto;
`;

const Header = styled.p`
  margin-bottom: 1rem;
  font-size: 44px;
  line-height: 54px;
  letter-spacing: -0.3px;
  color: black;
  font-weight: 800;
`;

const Description = styled.p`
  font-weight: 400;
  color: #9ca9b3;
  font-size: 20px;
`;

const SectionHeader = ({ title, description }: Props) => {
  return (
    <Section>
      <Header>{title}</Header>
      <Description>{description}</Description>
    </Section>
  );
};

export default SectionHeader;
