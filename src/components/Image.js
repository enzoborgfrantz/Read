import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from './Spinner';

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
`;

const StyledImage = styled.img.attrs({
  src: props => props.imageUrl,
  onLoad: props => props.onLoad,
  alt: '😞',
  onError: props => props.imageFailedToLoad,
})`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 20px;
  background-color: white;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  width: 1.75em;
  height: 1.75em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class Image extends Component {
  constructor(props) {
    super(props);
    const { imageUrl } = this.props;
    this.state = {
      imageLoading: !!imageUrl,
    };
    this.imageLoaded = this.imageLoaded.bind(this);
    this.imageFailedToLoad = this.imageFailedToLoad.bind(this);
  }

  imageLoaded() {
    this.setState({ imageLoading: false });
  }

  imageFailedToLoad() {
    this.setState({ imageLoading: false });
  }

  render() {
    const { imageLoading } = this.state;
    const { imageUrl } = this.props;

    return (
      <ImageWrapper>
        <StyledImage
          imageUrl={imageUrl}
          onLoad={this.imageLoaded}
          onError={this.imageFailedToLoad}
        />
        {
          imageLoading && (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>)
        }
      </ImageWrapper>
    );
  }
}

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default Image;
