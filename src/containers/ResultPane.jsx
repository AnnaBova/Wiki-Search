import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import WikiPreview from '../components/WikiPreview';

const ResultWrapper = styled.div`
  width: 80%;
  padding: 0 10%;
  margin-top: 20px;
`;

class ResultPane extends Component {
  render() {
    return (
      <ResultWrapper>
        {this.props.results.map( result => (
          <WikiPreview title={ result.title } snippet={ result.snippet } id={ result.pageid } key={ result.pageid } />
      ))}
      </ResultWrapper>
    );
  }
}

ResultPane.propTypes = {
  results: PropTypes.array
};

const mapStateToProps = state => ({
  results: state.results
});

export default connect(
  mapStateToProps,
  {}
)(ResultPane);
