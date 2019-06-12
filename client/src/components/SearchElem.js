import React from 'react';
import { Link } from 'react-router-dom';

const SearchElem = ({
  album: { cover, title, type, tracklist },
  artist: { name, link, picture },
  id,
  lyricPreview,
  lyricTitle,
}) => {
  return (
    <div>
      <div>
        Lyrics
        <div>
          <Link
            to={{
              pathname: '/lyrics',
              search: `artist=${name}&song=${lyricTitle}`,
            }}
          >
            {lyricTitle}
          </Link>
        </div>
        <div>{lyricPreview}</div>
      </div>
      <div>
        Album
        <div>
          <img src={cover} />
        </div>
        <div>
          <div>{title}</div>
          <div>{type}</div>
          <div>{tracklist}</div>
        </div>
      </div>
      <div>
        <div>
          Artist
          <img src={picture} />
        </div>
        <div>
          <div>{name}</div>
          <div>{link}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchElem;
