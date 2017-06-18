import React, { Component } from 'react';
import styled from 'styled-components';
import BookResult from './BookResult';
import currentBooks from '../data/currentBooks';

const CurrentlyReadingStyle = styled.div`
  width: 100%;
`;

const BookContainer = styled.div`

`;

class CurrentlyReading extends Component {
  render() {
    return (
      <CurrentlyReadingStyle>
        <BookContainer>
          {currentBooks.map(cb => <BookResult key={cb.id} {...cb} />)}
        </BookContainer>
      </CurrentlyReadingStyle>
    );
  }
}

module.exports = CurrentlyReading;
