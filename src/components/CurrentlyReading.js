import React, { Component } from 'react';
import styled from 'styled-components';
import SectionLabel from './SectionLabel';
import BookResult from './BookResult';
import currentBooks from '../data/currentBooks';

const CurrentlyReadingStyle = styled.div`
  width: 100%;
  margin-top: 70px;
`;

const BookContainer = styled.div`
  margin-top: 5px;
`;

class CurrentlyReading extends Component {
  render() {
    return (
      <CurrentlyReadingStyle>
        <SectionLabel>Currently Reading</SectionLabel>
        <BookContainer>
          {currentBooks.map(cb => <BookResult key={cb.id} {...cb} />)}
        </BookContainer>
      </CurrentlyReadingStyle>
    );
  }
}

module.exports = CurrentlyReading;
