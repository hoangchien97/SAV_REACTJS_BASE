import { Svg } from '@components/Common/Svg';
import styled from '@emotion/styled';
import React from 'react';

const ContainerItem = styled.div``;

const HeaderItem = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #eceded;
  word-wrap: break-word;
`;

const Paragraph = styled.span`
  font-size: 20px;
  color: #9ca9b3;
`;

const FeatureItem = () => {
  return (
    <ContainerItem>
      <Svg name="feature-tile-01" width="64px" height="64px" />

      <HeaderItem>Robust Workflow</HeaderItem>
      <Paragraph>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat.
      </Paragraph>
    </ContainerItem>
  );
};

export default FeatureItem;
