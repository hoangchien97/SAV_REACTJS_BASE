import styled from '@emotion/styled';
import { upFromBreakpoint } from '@utils';
import React from 'react';

const ItemContainer = styled.div`
  flex-basis: 344px;
  max-width: 344px;
  padding: 12px 0;
  ${upFromBreakpoint('small')} {
    padding: 12px;
  }
`;

const ItemInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
  background: #25282c;
  padding: 24px;

  ${upFromBreakpoint('small')} {
    padding: 24px 32px;
  }
`;

const ItemContent = styled.div`
  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 18px;
    margin-top: 12px;
    margin-bottom: 16px;
    background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2218%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2013.481c0-2.34.611-4.761%201.833-7.263C3.056%203.716%204.733%201.643%206.865%200L11%202.689C9.726%204.382%208.777%206.093%208.152%207.824c-.624%201.73-.936%203.578-.936%205.545V18H0v-4.519zm13%200c0-2.34.611-4.761%201.833-7.263%201.223-2.502%202.9-4.575%205.032-6.218L24%202.689c-1.274%201.693-2.223%203.404-2.848%205.135-.624%201.73-.936%203.578-.936%205.545V18H13v-4.519z%22%20fill%3D%22%236163FF%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fsvg%3E);
    background-repeat: no-repeat;
  }
`;

const ItemText = styled.div`
  color: #9ca9b3;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
`;

const ItemFooter = styled.div`
  margin-top: 32px;
  font-weight: 600;
  padding-top: 20px;
  border-top: thin solid #33363a;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    height: 1px;
  }
`;

const Text = styled.span`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  font-weight: 600;
`;

const Name = styled(Text)`
  color: #eceded;
`;
const ItemLink = styled(Text)`
  color: #1cb68b;
`;

const Symbol = styled.span`
  color: gray;
`;

interface Props {
  content: string;
  name: string;
}

const TestimonialItem = ({ content, name }: Props) => {
  return (
    <ItemContainer>
      <ItemInner>
        <ItemContent>
          <ItemText>{content}</ItemText>
        </ItemContent>
        <ItemFooter>
          <Name>{name}</Name>
          <Symbol> / </Symbol>
          <ItemLink>AppName</ItemLink>
        </ItemFooter>
      </ItemInner>
    </ItemContainer>
  );
};

export default TestimonialItem;
