import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediumGray } from '../styles/colours';

const ContentSectionWrapper = styled.div`
  background-color: white;
  margin: 5px;
  border-radius: 5px;
`;

const getBorder = showContent => (
  showContent ? `
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  ` : `
    border-radius: 5px;
  `
);

const ContentSectionTitle = styled.div`
  background-color: ${mediumGray};
  padding: 5px;
  ${props => getBorder(props.showContent)};
  overflow: hidden;
`;

const ChildWrapper = styled.div`
  padding: 5px;
`;

const renderTitle = (title, showContent, onClick) => !title ? null : (
  <ContentSectionTitle onClick={onClick} showContent={showContent} >
    { title }
  </ContentSectionTitle>
);

const renderChildren = (showContent, children) => !showContent ? null : (
  <ChildWrapper>
    {children}
  </ChildWrapper>
);

class ContentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: true,
    };
    this.collapse = this.collapse.bind(this);
  }

  collapse() {
    this.setState(prevState => ({ showContent: !prevState.showContent }));
  }

  render() {
    const { title, children } = this.props;
    const { showContent } = this.state;
    return (
      <ContentSectionWrapper>
        {renderTitle(title, showContent, this.collapse)}
        {renderChildren(showContent, children)}
      </ContentSectionWrapper>
    );
  }
}

ContentSection.PropTypes = {
  title: PropTypes.string,
};

export { ContentSection };
