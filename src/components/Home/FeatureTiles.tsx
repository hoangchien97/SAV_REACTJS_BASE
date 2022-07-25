import SectionHeader from '@components/Common/SectionHeader';
import styled from '@emotion/styled';
import React from 'react';
import FeatureItem from './FeatureItem';

const ContainerFeature = styled.div`
  padding: 80px 0;
  max-width: 1128px;
  padding: 0 24px;
`;

const WrapperItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
`;

const FeatureTiles = () => {
  const sectionHeader = {
    title: 'Build up the whole picture',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.',
  };

  return (
    <ContainerFeature>
      <SectionHeader title={sectionHeader.title} description={sectionHeader.description} />
      <WrapperItem>
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
      </WrapperItem>
    </ContainerFeature>
  );
};

export default FeatureTiles;
