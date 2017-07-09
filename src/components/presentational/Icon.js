import React from 'react';
import Book from '../../assets/icons/book.svg';
import BookShelf from '../../assets/icons/bookshelf.svg';
import Heart from '../../assets/icons/heart.svg';
import Lightning from '../../assets/icons/lightning.svg';
import ExclamationMark from '../../assets/icons/exclamation-mark.svg';
import Star from '../../assets/icons/star.svg';
import HalfStar from '../../assets/icons/halfStar.svg';
import EmptyStar from '../../assets/icons/emptyStar.svg';
import More from '../../assets/icons/more.svg';
import Calendar from '../../assets/icons/calendar.svg';
import Contract from '../../assets/icons/contract.svg';
import Page from '../../assets/icons/page.svg';
import Pantone from '../../assets/icons/pantone.svg';
import Pencil from '../../assets/icons/pencil.svg';
import Printer from '../../assets/icons/printer.svg';
import Flag from '../../assets/icons/flag.svg';
import ClipBoard from '../../assets/icons/clipboard.svg';
import Search from '../../assets/icons/search.svg';
import News from '../../assets/icons/news.svg';

const Icon = ({ name, ...props }) => {
  const icons = {
    book: <Book {...props} />,
    bookShelf: <BookShelf {...props} />,
    heart: <Heart {...props} />,
    lightning: <Lightning {...props} />,
    exclamationMark: <ExclamationMark {...props} />,
    star: <Star {...props} />,
    halfStar: <HalfStar {...props} />,
    emptyStar: <EmptyStar {...props} />,
    more: <More {...props} />,
    calendar: <Calendar {...props} />,
    contract: <Contract {...props} />,
    page: <Page {...props} />,
    pantone: <Pantone {...props} />,
    pencil: <Pencil {...props} />,
    printer: <Printer {...props} />,
    flag: <Flag {...props} />,
    clipBoard: <ClipBoard {...props} />,
    search: <Search {...props} />,
    news: <News {...props} />,
  };

  return icons[name] || <div />;
};

Icon.defaultProps = {
  height: 25,
  width: 25,
};

export default Icon;
