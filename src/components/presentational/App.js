import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import CurrentlyReading from './CurrentlyReading';
import { Header } from './Header';
import { Content } from './Content';
import { font } from '../../styles/fonts';
import { BookSearchPage } from '../containers/BookSearchPage';
import Wishlist from './Wishlist';

const AppWrapper = styled.div`
  width: 100%;
  font-family: ${font};
  font-size: 12px;
`;

function x() {
  const unsortedArray = [
    {
      name: 'mark',
      age: 18,
    }, {
      name: 'john',
      age: 17,
    }, {
      name: 'james',
      age: 30,
    }, {
      name: 'aaron',
      age: 12,
    }, {
      name: 'fred',
      age: 40,
    }, {
      name: 'kurt',
      age: 40,
    }, {
      name: 'enzo',
      age: 22,
    },
  ];

  const sortArray = array => [...array].sort((a, b) => a.age > b.age);

  console.log('unsorted array, before sorting: ', ...unsortedArray);
  const sortedArray = sortArray(unsortedArray);

  console.log('sorted array: ', ...sortedArray);
  console.log('unsorted array, after sorting (no mutations): ', ...unsortedArray);
}

const Home = () => (
  <CurrentlyReading />
);

const NotFound = () => (
  <div>
    {x()}
    You have found nothing
  </div>
);

export default function () {
  return (
    <AppWrapper>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/search" component={BookSearchPage} />
          <Route path="/collection" component={Wishlist} />
          <Route component={NotFound} />
        </Switch>
      </Content>
    </AppWrapper>
  );
}
