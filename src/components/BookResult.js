import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import NumberInput from './NumberInput';

import { gray, mediumGray, darkGray } from '../styles/colours';
import { font } from '../styles/fonts';

const BookTitle = styled.span`
  font-family: ${font};
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  display: block;
  color: ${darkGray}
`;

const BookCover = styled.img.attrs({
  src: props => props.cover,
})`
  width: 60px;
  height: 100%;
`;

const BookCoverWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  overflow: scroll;
  width: 100%;
`;

const BookResultWrapper = styled.div`
  background-color: white;
  padding: 10px;
  height: 80px;
  border-top: 1px solid ${gray};
  display: flex;
  &:active {
    background-color: ${mediumGray};
  };
  transition: all .2s linear;
`;

const ProgressBarWrapper = styled.div`
  margin: 5px 0;
`;

const CurrentPageWrapper = styled.div`
  display: flex;
`;

const CurrentPageLabel = styled.span`
  font-family: ${font};
  font-size: 10px;
  color: ${darkGray};
  margin-top: 10px;
`;

const RemainingPages = styled.span`
font-family: ${font};
font-size: 12px;
color: ${darkGray};
margin-top: 25px;
`;


const BookResult = ({ title, cover, currentPage, totalPages }) => (
  <BookResultWrapper>
    <BookCoverWrapper>
      <BookCover src={cover} />
    </BookCoverWrapper>
    <BookDetails>
      <BookTitle>{title}</BookTitle>
      <ProgressBarWrapper>
        <ProgressBar value={currentPage} max={totalPages} />
      </ProgressBarWrapper>
      <CurrentPageWrapper>
        <CurrentPageLabel>Current Page</CurrentPageLabel>
        <NumberInput defaultValue={currentPage} />
        <RemainingPages>of {totalPages} pages</RemainingPages>
      </CurrentPageWrapper>
    </BookDetails>
  </BookResultWrapper>
);

module.exports = BookResult;
