const axios = require('axios');

const getSearchResult = async searchValue => {
  const {
    data: { data },
  } = await axios.get(`https://api.deezer.com/search?q=${searchValue}`);
  return data;
};

const getLyrics = async (pnl, dd) => {
  const { data } = await axios.get(
    `https://api.lyrics.ovh/v1/${artist}/${title}`
  );
  console.log(data);
  return data;
};

module.exports = { getSearchResult, getLyrics };
