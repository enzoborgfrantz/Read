import React from 'react';
import styled from 'styled-components';
import CurrentlyReading from './CurrentlyReading';
import Wishlist from './Wishlist';
import { Header } from './Header';
import { Content } from './Content';
import { ContentSection, ContentSectionRow } from './ContentSection';
import { font } from '../styles/fonts';
import Input from './Input';
import { Button } from './Button';
import { textValidation } from '../modules/validation.module';
import SearchResults from './SearchResults';

const AppWrapper = styled.div`
  width: 100%;
  font-family: ${font};
  font-size: 12px;
`;

const SearchButton = Button.extend`
  width: 40%;
  margin-left: 5px;
`;

export default function () {
  return (
    <AppWrapper>
      <Header />
      <Content>
        {/* <CurrentlyReading /> */}
        {/* <Wishlist /> */}
        <ContentSection title={'Search for Books'}>
          <ContentSectionRow>
            <Input
              type={'text'}
              placeholder={'Enter book name'}
              validationFunction={textValidation}
            />
            <SearchButton value={'Search'} />
          </ContentSectionRow>
          <ContentSectionRow>
            <SearchResults />
          </ContentSectionRow>
        </ContentSection>
      </Content>
    </AppWrapper>
  );
}
