import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Loader from './Loader';
import Rating from './Rating';
import { bodyGray, darkestGray, blue } from '../styles/colours';
import { ButtonWithIcon, IconButton } from './Button';

const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
`;

const ResultWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${bodyGray};
  border-radius: 4px;
  margin-bottom: 5px;
`;

const LoaderContainer = styled.div`
  margin: 25px;
  width: 50px;
  height: 50px;
`;

const renderLoader = () => (
  <LoaderContainer>
    <Loader />
  </LoaderContainer>
);

const ResultRow = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const BookCover = styled.img.attrs({
  src: props => props.cover,
})`
  background-color: white;
  height: 100%;
  width: 100%;
`;

const BookWrapper = styled.div`
  height: 105px;
  flex-basis: 80px;
  margin-right: 10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const BookOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 0px 1px 3px rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, 0.25);
`;

const BookRating = styled(Rating)`
  position: absolute;
  bottom: 0;
  padding: 5px;
  box-sizing: border-box;
  background: linear-gradient(rgba(255, 255, 255, 0), white 75%);
`;

const ResultDetails = styled.div`
  color: ${darkestGray};
  flex-grow: 1;
  box-sizing: border-box;
  justify-content: space-between;
  height: 105px;
  display: flex;
  flex-direction: column;
`;

const MoreButton = styled(ButtonWithIcon)`
  background-color: #bdbdbd;
`;

const SaveButton = styled(IconButton)`
  flex: 1;
  padding: 0px 5px 0px 10px;
`;

const DescriptionLine = styled.div`

`;

const FunctionLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const CategorySection = styled.div`
  display: flex;
  flex-direction: row;
`;

const Category = styled.span`
  background-color: ${blue};
  color: white;
  padding: 3px;
  border-radius: 3px;
  margin-right: 2px;
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
    height: 0px;
  } to {
    opacity: 1;
    height: 100px;
  }
`;

const MoreDetails = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  animation: ${FadeIn} .35s ease-in 1;
  animation-fill-mode: forwards;
`;

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreDetails: false,
    };
    this.toggleMoreDetails = this.toggleMoreDetails.bind(this);
  }

  toggleMoreDetails() {
    this.setState(prevState => ({ showMoreDetails: !prevState.showMoreDetails }));
  }

  render() {
    const {
      image,
      rating,
      name,
      author,
      publisher,
      pageCount,
      publishDate,
    } = this.props;

    const { showMoreDetails } = this.state;

    return (
      <ResultWrapper>
        <ResultRow>
          <BookWrapper>
            <BookOverlay />
            <BookCover src={image} />
            <BookRating rating={rating} />
          </BookWrapper>
          <ResultDetails>
            <DescriptionLine>{name}</DescriptionLine>
            <DescriptionLine>{author}, {publisher}</DescriptionLine>
            <DescriptionLine>{pageCount} Pages</DescriptionLine>
            <DescriptionLine>{publishDate}</DescriptionLine>
            <FunctionLine>
              <MoreButton value={'More Details'} icon={'more'} onClick={this.toggleMoreDetails} />
              <SaveButton icon={'heart'} />
            </FunctionLine>
          </ResultDetails>
        </ResultRow>
        {showMoreDetails && <MoreDetails />}
      </ResultWrapper>
    );
  }
}

const renderResults = results => results.map(r => <Result {...r} />);

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState(
      {
        results: [
          {
            name: 'Javascript the Definitive Guide',
            rating: 3.5, //
            image: 'http://books.google.com/books/content?id=2weL0iAfrEMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            isbn: '21321CAK1M',
            author: 'Jimmy Joe',
            category: ['Romance', 'Adventure'],
            description: 'hello hello',
            pageCount: 401,
            publishDate: new Date().toISOString().split('T')[0],
            publisher: 'O\'Reilly media',
            language: 'en',
          },
          {
            name: 'second book',
            rating: 4,
          },
        ],
      }), 100);
  }

  render() {
    const { results } = this.state;
    return (
      <ResultsContainer>
        {!results ? renderLoader() : renderResults(results) }
      </ResultsContainer>
    );
  }
}

export default SearchResults;
