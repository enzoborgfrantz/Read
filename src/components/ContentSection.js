import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediumGray, darkestGray } from '../styles/colours';

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
  padding: 10px;
  font-size: 14px;
  ${props => getBorder(props.showContent)};
  overflow: hidden;
  color: ${darkestGray};
`;

const ChildWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ContentSectionRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

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

export { ContentSection, ContentSectionRow };
