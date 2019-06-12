import axios from 'axios';

export const getSearchResult = async searchValue => {
  const { data } = await axios.get(`/search?q=${searchValue}`);
  return data;
};

export const getLyrics = async (artist, song) => {
  const { data } = await axios.get(`/song?artist=${artist}&song=${song}`);
  return data;
};
