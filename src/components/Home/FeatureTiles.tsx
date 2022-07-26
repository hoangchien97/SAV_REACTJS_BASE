import SectionHeader from '@components/Common/SectionHeader';
import styled from '@emotion/styled';
import React from 'react';
import FeatureItem from './FeatureItem';
import { upFromBreakpoint } from '@utils/mixins';

const ContainerFeature = styled.div`
  padding: 80px 0 !important;
  max-width: 1128px;
  padding: 0 24px;
`;

const WrapperItem = styled.div`
  display: grid;

  ${upFromBreakpoint('medium')} {
    grid-template-columns: repeat(3, 1fr);
  }
  // grid-column-gap: 1rem;
`;

const featureTiles = [
  {
    icon: 'feature-tile-01',
    title: 'Robust Workflow',
    paragraph:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
  {
    icon: 'feature-tile-02',
    title: 'Robust Workflow',
    paragraph:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
  {
    icon: 'feature-tile-03',
    title: 'Robust Workflow',
    paragraph:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
  {
    icon: 'feature-tile-04',
    title: 'Robust Workflow',
    paragraph:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
  {
    icon: 'feature-tile-05',
    title: 'Robust Workflow',
    paragraph:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
  {
    icon: 'feature-tile-06',
    title: 'Robust Workflow',
    paragraph:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
];

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
        {featureTiles.map((item, index) => (
          <FeatureItem key={index} icon={item.icon} title={item.title} paragraph={item.paragraph} />
        ))}
      </WrapperItem>
    </ContainerFeature>
  );
};

export default FeatureTiles;
