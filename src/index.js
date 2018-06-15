import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCUw5s2O247IcP5AY5a5qIaRo8TqG1pVP8';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
            this.setState({ videos });
            // this.setState({ videos: videos }); when state and var have same names
        });
    }

    render() {
        return (
        <div>
            <SearchBar />
            <VideoList />
        </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));