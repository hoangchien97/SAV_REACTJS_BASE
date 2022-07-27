import { Svg } from '@components/Common/Svg';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import React from 'react';
import './index.module.scss';

const socials = [
  {
    name: 'youtube',
    value: 'YOUTUBE',
    url: 'https://www.youtube.com',
  },
  {
    name: 'linkedin',
    value: 'LINKEDIN',
    url: 'https://www.linkedin.com',
  },
  {
    name: 'twitter',
    value: 'TWITTER',
    url: 'https://twitter.com',
  },
];

const Container = styled(Layout.Footer)`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-row-gap: 25px;
  padding: 30px 0;
  justify-items: center;
  background-color: #ccc;
`;

const WrapperSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 37px;
  justify-self: center;
`;

const AllRightsReserved = styled.div``;

const SvgSocial = styled(Svg)`
  width: 24px;
  height: 24px;
  stroke: black;
  fill: black;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Footer = () => {
  const date = new Date();
  return (
    <Container className="footer">
      <Svg name="logo" width={20} height={20} fill="red" />
      <WrapperSocial>
        {socials.map(({ name, value, url }) => {
          return <SvgSocial name={name} key={value} onClick={() => window.open(url, '_blank')} />;
        })}
      </WrapperSocial>
      <AllRightsReserved>© {date.getFullYear()} Savvycom. All Rights Reserved.</AllRightsReserved>
    </Container>
  );
};

export default Footer;
