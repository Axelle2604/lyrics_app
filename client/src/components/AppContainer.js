import React, { Component } from 'react';
import withHeader from '../hoc/withHeader';
import { Link } from 'react-router-dom';
import SearchElem from './SearchElem';

class AppContainer extends Component {
  state = {
    isLoading: true,
  };

  render() {
    const { isLoading, lyrics } = this.props;
    console.log(this.props);
    const loader = isLoading && <div>Loading</div>;
    const listResults =
      !isLoading &&
      lyrics.map(
        ({ album, artist, title: lyricTitle, preview: lyricPreview }, id) => {
          return (
            <div key={id}>
              <SearchElem
                album={album}
                artist={artist}
                id={id}
                lyricTitle={lyricTitle}
                lyricPreview={lyricPreview}
              />
            </div>
          );
        }
      );
    return loader || listResults;
  }
}

export default withHeader(AppContainer);
