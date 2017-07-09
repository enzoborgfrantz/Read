import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';

const RatingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const getFullStarsCount = rating => Math.floor(rating);
const getHalfStarsCount = rating => (rating % 1 ? 1 : 0);
const getEmptyStarsCount = rating => 5 - Math.ceil(rating);

const getStarIcon = (
  starCount,
  starType,
) => (!starCount ? null : new Array(starCount).fill(0).map(() =>
  <Icon name={starType} width={12} height={12}/>));

const Rating = ({ className, rating }) => (
  <RatingWrapper className={className}>
    {getStarIcon(getFullStarsCount(rating), 'star')}
    {getStarIcon(getHalfStarsCount(rating), 'halfStar')}
    {getStarIcon(getEmptyStarsCount(rating), 'emptyStar')}
  </RatingWrapper>
);

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
