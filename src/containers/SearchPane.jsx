import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { searchWiki, getGoogleSuggest, setResult } from '../redux/actions/actionCreators';
import SearchFrom from '../components/SearchForm';

class SearchPane extends Component {
  componentDidMount() {
    //this.props.onMount();  // cors error
  }

  onSearch = (search) => {
    this.props.onSearch( search );
  }

  render() {
    return (
      <SearchFrom onSearch={ this.onSearch } onClose={ this.props.onClose } suggestQueries={ this.props.suggestQueries } />
    );
  }
}

SearchPane.propTypes = {
  onSearch: PropTypes.func,
  //onMount: PropTypes.func,
  onClose: PropTypes.func,
  suggestQueries: PropTypes.array
};

const mapDispatchToProps = dispatch => ({
  onSearch: bindActionCreators(searchWiki, dispatch),
  onMount: bindActionCreators(getGoogleSuggest, dispatch),
  onClose: bindActionCreators(setResult, dispatch)
});

const mapStateToProps = state => ({
  suggestQueries: state.suggestQueries
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPane);
