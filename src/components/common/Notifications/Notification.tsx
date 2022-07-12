// import Svg from "@components/Core/Svg";
import { colors } from "@data/styles";
import styled from "@emotion/styled";
import React from "react";

const Title = styled.span<{ color: string }>`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.8px;
  color: ${(p) => p.color};
  margin-left: 10px;
  text-transform: capitalize;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Message = styled.span`
  font-family: Roboto;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.8px;
`;

const rootColors = {
  critical: {
    background: colors.red,
    border: colors.red,
    text: colors.white,
    title: colors.white,
  },
  warning: {
    background: colors.warning,
    border: colors.warningBorder,
    text: colors.black,
    title: colors.warningTitle,
  },
  success: {
    background: colors.success,
    border: colors.successBorder,
    text: colors.black,
    title: colors.successTitle,
  },
  error: {
    background: colors.error,
    border: colors.errorBorder,
    text: colors.black,
    title: colors.errorTitle,
  },
};

const icon = {
  critical: {
    name: "warning",
    color: colors.white,
  },
  warning: {
    name: "warning",
    color: colors.warning,
  },
  success: {
    name: "checked-active",
    color: colors.success,
  },
  error: {
    name: "warning",
    color: colors.warning,
  },
};

type Props = {
  type: "critical" | "warning" | "success" | "error";
  message: string;
};

const Root = styled.div<{ background: string; border: string; text: string }>`
  width: 100%;
  height: 100%;
  padding: 8px 12px;
  background: ${(p) => p.background};
  border: 1px solid ${(p) => p.border};
  color: ${(p) => p.text};
`;

export const Notification = ({ type, message }: Props) => {
  return (
    <Root
      background={rootColors[type].background}
      border={rootColors[type].border}
      text={rootColors[type].text}
    >
      <TitleContainer>
        {/* <Svg
          name={icon[type].name}
          width={18}
          height={18}
          fill={icon[type].color}
        /> */}
        <Title color={rootColors[type].title}>{type}</Title>
      </TitleContainer>
      <Message>{message}</Message>
    </Root>
  );
};
