import React, { Component } from 'react';
import { getSearchResult } from '../services/apiCalls';

function withHeader(WrappedComponent) {
  return class extends Component {
    state = {
      searchValue: '',
      lyrics: [],
      isLoading: true,
    };

    fetchSearchValue = async searchValue => {
      this.setState(
        { lyrics: await getSearchResult(searchValue), isLoading: false },
        () => console.log(this.state.lyrics)
      );
    };

    onChangeInputSearch = ({ target: { value: searchValue } }) => {
      this.setState({ searchValue });
    };

    onKeyDownInputSearch = ({ keyCode }) => {
      const { searchValue } = this.state;
      keyCode === 13 && this.fetchSearchValue(searchValue);
    };
    render() {
      const { lyrics, isLoading } = this.state;
      return (
        <div>
          <div>
            <h1>Lyrics App</h1>
            <input
              type="text"
              placeholder="Search"
              onChange={this.onChangeInputSearch}
              onKeyDown={this.onKeyDownInputSearch}
            />
          </div>
          <WrappedComponent
            {...this.props}
            lyrics={lyrics}
            isLoading={isLoading}
          />
        </div>
      );
    }
  };
}

export default withHeader;
