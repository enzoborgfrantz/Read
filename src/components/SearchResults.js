import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Loader from './Loader';
import Rating from './Rating';
import Image from './Image';
import { bodyGray, darkestGray, red } from '../styles/colours';
import { ButtonWithIcon, IconButton } from './Button';
import mockResults from '../data/searchResults';
import Icon from './Icon';

const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
`;

const ResultWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  box-sizing: border-box;
  background-color: ${bodyGray};
  border-radius: 4px;
  margin-bottom: 5px;
  user-select: none;
  &:active {
    background-color: rgba(107, 107, 107, .2);
  };
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

const BookWrapper = styled.div`
  height: 105px;
  width: 80px;
  margin-right: 5px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  font-size: 15px;
`;

const BookOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid white;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.25);
  z-index: 1;
`;

const BookRating = styled(Rating)`
  position: absolute;
  bottom: 0;
  padding: 5px;
  box-sizing: border-box;
  background: linear-gradient(rgba(255, 255, 255, 0), white 35%);
`;

const ResultDetails = styled.div`
  color: ${darkestGray};
  box-sizing: border-box;
  width: 100%;
  ${props => props.collapsed ? 'height:auto;' : 'height: 135px;'};
  transition: max-height .75s ease-in;
  overflow: hidden;
`;

const DescriptionItemWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
  line-height: 20px;
`;

const DescriptionContent = styled.span`
  padding-left: 5px;
`;

const DescriptionItem = ({ icon, children }) => (
  <DescriptionItemWrapper>
    {icon && <Icon name={icon} width={12} height={12} />}
    <DescriptionContent>{children}</DescriptionContent>
  </DescriptionItemWrapper>
);

const CategorySection = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  font-weight: 300;
`;

const Category = styled.span`
  background-color: ${red};
  color: white;
  padding: 3px 4px 6px 3px;
  border-radius: 2px;
  margin-right: 5px;
  font-size: 10px;
  line-height: normal;
  box-shadow: inset -1px -3px rgba(117, 117, 117, .3);
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const Description = styled.div`
  border-left: 1px solid ${darkestGray};
  font-weight: 300;
  margin-top: 5px;
  padding-left: 5px;
  line-height: 18px;
`;

const DescriptionTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
`;

const DescriptionSubtitle = styled.div`
  font-size: 13px;
  line-height: 20px;
`;

const DescriptionItalic = styled.span`
  font-style: italic;
`;

const BookAndButtonWrapper = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
`;

const SaveButton = styled(IconButton)`
  margin-top: 5px;
  flex: 1;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
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
      language,
      description,
      category,
    } = this.props;

    const { showMoreDetails } = this.state;

    return (
      <ResultWrapper onClick={this.toggleMoreDetails}>
        <BookAndButtonWrapper>
          <BookWrapper>
            <BookOverlay />
            <Image imageUrl={image} />
            <BookRating rating={rating} />
          </BookWrapper>
          <SaveButton icon={'heart'} />
        </BookAndButtonWrapper>
        <ResultDetails collapsed={showMoreDetails}>
          <DescriptionTitle>{name}</DescriptionTitle>
          <DescriptionSubtitle>{author},
              <DescriptionItalic>
                {` ${publisher}`}
              </DescriptionItalic>
          </DescriptionSubtitle>
          <DescriptionItem icon={'calendar'}>{`Publish date ${publishDate}`}</DescriptionItem>
          <DescriptionItem icon={'contract'}>{`${pageCount} Pages`}</DescriptionItem>
          <DescriptionItem icon={'flag'}>{`Language, ${language}`}</DescriptionItem>
          {/* {showMoreDetails && ( */}
          {/* <span> */}
          <Description>
            {description}
          </Description>

          { category && (
          <DescriptionItem icon={'pantone'}>
            <CategorySection>
              {category.map(c => <Category>{c}</Category>)}
            </CategorySection>
          </DescriptionItem>
              )}
          {/* </span> */}
          {/* )} */}
        </ResultDetails>
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
        results: mockResults,
      }), 0);
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
