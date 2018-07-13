import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 40%;
  padding: 45vh 30% 0;
  text-align: center;
  transition: all 0.1s ease 0.1s;
  a {
    color: #fff;
    font-size: 16px;
    text-decoration: none;
  }

  &.search{
    padding: 5% 30% 0;
  }
`;

const SearchBox = styled.form`
  border: 3px solid #D96F32;
  height: 30px;
  width: 30px;
  margin: 15px 0;
  border-radius: 50%;
  position: relative;
  left: calc(50% - 20px);
  transition: all 0.25s ease 0.3s;
  transition-delay: 0.15s;

  ::before {
    content: '';
    background-color: #D96F32;
    width: 3px;
    height: 15px;
    position: absolute;
    top: 25px;
    left: 30px;
    transform: rotate(-45deg);
    transition: height 0.15s ease 0.3s;
    transition-delay: 0.25s;
  }

  input {
    width: calc(100% - 20px);
    height: calc(100% - 10px);
    padding: 5px 10px;
    background-color: unset;
    border: unset;
    display: none;
    color: #fff;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }

  &.active {
    width: 220px;
    left: calc(50% - 110px);
    border-radius: 25px;
    transition-delay: 0.15s;

    input {
      display: block;
    }

    ::before {
      height: 0;
      transition-delay: 0s;
    }
  }
`;

const CloseIcon = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  overflow: hidden;
  transition: all 0.15s;

  ::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 15px;
    background-color: #D96F32;
    top: -30px;
    left: 60px;
    transform: rotate(45deg);
    transition: all 0.35s ease 0.3s;
    transition-delay: 0s;
  }
  ::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 15px;
    background-color: #D96F32;
    bottom: -30px;
    left: 60px;
    transform: rotate(-45deg);
    transition: all 0.35s ease 0.3s;
    transition-delay: 0.1s;
  }

  &.active {
    ::before {
      top: 25%;
      left: 50%;
      transition-delay: 0.15s;

    }
    ::after {
      bottom: 25%;
      left: 50%;
      transition-delay: 0.35s;
    }
  }
`;

class SearchForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
    isActive: false,
    helper: 'Click icon to search',
    searchStarted: false
    };
  }

  toggleSearch = () => {
    this.setState({
      searchStarted: false,
      isActive: !this.state.isActive,
      helper:'',
    });
  }

  closeSearch = () => {
    if(this.state.isActive) {
      this.props.onClose([]);
      this.toggleSearch();}

  }

  openSearch = () => {
    if(!this.state.isActive)this.toggleSearch();
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.onSearch(e.target.searchInput.value);
    this.setState({
      ...this.state,
      searchStarted: true
    });
  }

  render() {

    return (
      <Wrapper className={ this.state.searchStarted ? 'search' : '' }>
        <a href="https://en.wikipedia.org/wiki/Special:Random" rel="noopener noreferrer" target="_blank">Click here for a random article</a>
        <SearchBox className={ this.state.isActive ? 'active' : '' } onClick={ this.openSearch } onSubmit={ this.handleSearch }>
          <input type="text" name="searchInput" autoComplete="off" />
          <CloseIcon onClick={ this.closeSearch } className={ this.state.isActive ? 'active' : '' } />
        </SearchBox>
        {this.state.helper}
      </Wrapper>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func,
  onClose: PropTypes.func
};

export default SearchForm;
