import { colors } from '@data/styles';
import styled from '@emotion/styled';
import React from 'react';
// import logo from '@/logo.svg';
const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const LoadingContainer = styled.div`
  width: 150px;
  height: 50px;
  position: relative;
`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoadingText = styled.p`
  top: 0;
  padding: 0;
  margin: 0;
  color: ${colors.white};
  animation: text 3.5s ease both infinite;
  letter-spacing: 1px;

  @keyframes text {
    0% {
      letter-spacing: 1px;
      transform: translateX(-1em);
    }

    40% {
      letter-spacing: 2px;
      transform: translateX(0);
    }

    80% {
      letter-spacing: 1px;
      transform: translateX(1em);
    }

    90% {
      letter-spacing: 2px;
      transform: translateX(0);
    }

    100% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }
  }
`;
const AnimatedBar = styled.div`
  color: ${colors.white};
  font-size: 10px;
  margin: 0 auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: loading 1.8s infinite ease-in-out;
  animation: loading 1.8s infinite ease-in-out;

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 0;

    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: loading 1.8s infinite ease-in-out;
    animation: loading 1.8s infinite ease-in-out;
  }

  &:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &:after {
    left: 3.5em;
  }

  @-webkit-keyframes loading {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes loading {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;

const Loader = () => {
  return (
    // loading component for suspense fallback
    <Content>
      <LoadingContainer>
        {/* <LoadingText>Loading...</LoadingText> */}
        <AnimatedBar />
      </LoadingContainer>
    </Content>
  );
};

export default Loader;
