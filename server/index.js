const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { getSearchResult, getLyrics } = require('./services');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/search', async (req, res) => {
  const searchValue = req.query.q;
  res.send(await getSearchResult(searchValue));
});

app.get('/song', async (req, res) => {
  const artist = req.query.artist;
  const song = req.query.song;
  res.send(await getLyrics(artist, song));
});

const server = app.listen(8888, () => {
  console.log('Server started.');
});
