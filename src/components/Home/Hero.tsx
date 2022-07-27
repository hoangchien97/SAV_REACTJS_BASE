import styled from '@emotion/styled';
import { Space, Button, Modal } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import React, { useState } from 'react';

const HeroContent = styled.div``;

const LandingTemplate = styled.h1`
  opacity: 1;
  transform: translate(0);
  transition: opacity 0.8s cubic-bezier(0.39, 0.575, 0.565, 1),
    transform 0.8s cubic-bezier(0.39, 0.575, 0.565, 1);
  margin-bottom: 1rem;
  font-weight: bold !important;
  font-size: 52px;
`;

const HeroDescriptionWrapper = styled.div``;

const TextStartUp = styled.span`
  color: #5658dd;
`;

const HeroDescription = styled.p`
  max-width: 620px;
  font-size: 20px;
  margin: 0 auto 52px;
`;

const HeroFigure = styled.div`
  margin-top: 4rem;
`;

const ImageHero = styled.img``;

const IframeVideo = styled.iframe`
  width: 100%;
  height: 300px;
`;

const Video = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Hero = () => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = () => {
    setVideomodalactive(false);
  };

  return (
    <HeroContent>
      <LandingTemplate>
        Landing template for <TextStartUp>startups</TextStartUp>
      </LandingTemplate>

      <HeroDescriptionWrapper>
        <HeroDescription>
          Our landing page template works on all devices, so you only have to set it up once, and
          get beautiful results forever.
        </HeroDescription>
        <ButtonGroup>
          <Space size="middle">
            <Button type="primary" size="large">
              Get Started
            </Button>
            <Button size="large">View on Github</Button>
          </Space>
        </ButtonGroup>
      </HeroDescriptionWrapper>

      <HeroFigure>
        <Video data-video="https://player.vimeo.com/video/174002812" onClick={openModal}>
          <ImageHero
            className="has-shadow"
            src="./images/video-placeholder.jpg"
            alt="Hero"
            width={896}
            height={504}
          />
        </Video>
      </HeroFigure>
      <Modal
        visible={videoModalActive}
        centered
        onCancel={closeModal}
        maskClosable={false}
        footer={null}
      >
        <IframeVideo
          title="video"
          src="https://player.vimeo.com/video/174002812"
          frameBorder="0"
          allowFullScreen
        ></IframeVideo>
      </Modal>
    </HeroContent>
  );
};

export default Hero;
