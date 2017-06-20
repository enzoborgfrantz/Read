import React from 'react';
import Book from '../assets/icons/book.svg';
import BookShelf from '../assets/icons/bookshelf.svg';
import Heart from '../assets/icons/heart.svg';
import Lightning from '../assets/icons/lightning.svg';
import ExclamationMark from '../assets/icons/exclamation-mark.svg';
import Star from '../assets/icons/star.svg';
import HalfStar from '../assets/icons/halfStar.svg';
import EmptyStar from '../assets/icons/emptyStar.svg';
import More from '../assets/icons/more.svg';

const Icon = ({ name, width = 25, height = 25 }) => {
  const icons = {
    book: <Book width={width} height={height} />,
    bookShelf: <BookShelf width={width} height={height} />,
    heart: <Heart width={width} height={height} />,
    lightning: <Lightning width={width} height={height} />,
    exclamationMark: <ExclamationMark width={width} height={height} />,
    star: <Star width={width} height={height} />,
    halfStar: <HalfStar width={width} height={height} />,
    emptyStar: <EmptyStar width={width} height={height} />,
    more: <More width={width} height={height} />,
  };

  return icons[name] || <div />;
};

export default Icon;
