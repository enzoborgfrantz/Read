import React from 'react';
import styled from 'styled-components';
import CurrentlyReading from './CurrentlyReading';
import Wishlist from './Wishlist';
import { Header } from './Header';
import { Content } from './Content';
import { ContentSection } from './ContentSection';
import { font } from '../styles/fonts';
import { Input } from './Input';

const AppWrapper = styled.div`
  width: 100%;
  font-family: ${font};
  font-size: 12px;
`;

export default function () {
  return (
    <AppWrapper>
      <Header />
      <Content>
        {/* <CurrentlyReading /> */}
        {/* <Wishlist /> */}
        <ContentSection>
          Hello world
          <div>abc.</div>
          <Input type={'text'} value={'uwotm8'} placeholder={'lean bruv'} />
          <Input type={'number'} value={'uwotm8nu'} placeholder={'lean bruvnu'} />
        </ContentSection>
        <ContentSection title={'title is'}>
          shbcha
          <Input type={'text'} value={'uwotm8'} placeholder={'lean bruv'} />
        </ContentSection>
      </Content>
    </AppWrapper>
  );
}
