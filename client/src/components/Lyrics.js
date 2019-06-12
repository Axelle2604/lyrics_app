import React, { Component } from 'react';
import { getLyrics } from '../services/apiCalls';

export default class Lyrics extends Component {
  state = {
    lyrics: [],
  };
  componentDidMount = () => {
    console.log('ok');
  };

  fetchLyrics = async () => {
    this.setState({ lyrics: await getLyrics() });
  };

  render() {
    return <div>coucou</div>;
  }
}
