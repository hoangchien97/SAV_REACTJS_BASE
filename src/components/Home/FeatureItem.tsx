import { Svg } from '@components/Common/Svg';
import styled from '@emotion/styled';
import React from 'react';

const ContainerItem = styled.div`
  padding: 2rem;
`;

const HeaderItem = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #000000c2;
  word-wrap: break-word;
`;

const BoxSvg = styled.div`
  background-color: #5558dd;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.span`
  font-size: 20px;
  color: #9ca9b3;
`;

interface Props {
  icon: string;
  title: string;
  paragraph: string;
}

const FeatureItem = ({ icon, title, paragraph }: Props) => {
  return (
    <ContainerItem>
      <BoxSvg>
        <Svg name={icon} width={48} height={48} fill="white" stroke="white" />
      </BoxSvg>
      <HeaderItem>{title}</HeaderItem>
      <Paragraph>{paragraph}</Paragraph>
    </ContainerItem>
  );
};

export default FeatureItem;
