import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PreviewWrapper = styled.a`
  display: block;
  width: 100%;
  height: 120px;
  margin-top: 30px;
  background-color: #E7E7E8;
  color: black;
  text-decoration: none;

  h1 {
    font-size: 24px;
  }

  ::before {
    content: '';
    width: 6px;
    height: 120px;
    position: absolute;
    left: calc(10% - 6px);
    background-color: #f06d22;
    display: none;
  }

  :hover {
    ::before {
      display: block;
    }
  }
`;

const Description = styled.div`
  font-size: 16px
`;

const TextContainer = styled.div`
padding: 5px 30px;
`;

class WikiPreview extends Component {

  render() {

    return (
      <PreviewWrapper href={ `https://en.wikipedia.org/?curid=${this.props.id}` } rel="noopener noreferrer" target="_blank" >
        <TextContainer>

          <h1>  {this.props.title} </h1>
          <Description dangerouslySetInnerHTML={ { __html: this.props.snippet } } />
        </TextContainer>
      </PreviewWrapper>
    );
  }
}

WikiPreview.propTypes = {
  title: PropTypes.string,
  snippet: PropTypes.string,
  id: PropTypes.number
};

export default WikiPreview;
