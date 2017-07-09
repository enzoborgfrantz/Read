import React from 'react';
import styled from 'styled-components';
import { ContentSectionRow } from './ContentSection';
import Input from './Input';
import SearchResults from './SearchResults';
import { textValidation } from '../../modules/validation.module';

const BookSearchWrapper = styled.div`
  padding: 5px;
`;

const BookSearch = () => (
  <BookSearchWrapper>
    <ContentSectionRow>
      <Input
        type={'search'}
        placeholder={'Enter book name'}
        validationFunction={textValidation}
        onSearch={() => { console.log('casncja'); }}
      />
    </ContentSectionRow>
    <ContentSectionRow>
      <SearchResults />
    </ContentSectionRow>
  </BookSearchWrapper>
);

export default BookSearch;
