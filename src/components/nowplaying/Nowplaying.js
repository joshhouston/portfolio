import React, { Component } from 'react';
import { SlideDown } from 'react-slidedown';
import Flip from 'react-reveal/Flip';
import axios from 'axios';



class Nowplaying extends Component {
    constructor() {
        super();
        this.state = {
            openSpotify: true ? true : false,
            nowPlaying: {
                name: '',
                image: '',
                artist: '',
                albumurl: ''
            }
        }
        this.toggleSpotify = this.toggleSpotify.bind(this);

    }

    toggleSpotify() {
        this.setState({ openSpotify: false })
        if (this.state.openSpotify === false) {
            this.setState({ openSpotify: true })
        }
    }

    componentDidMount() {
        axios
            .post(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=houstonsspace&api_key=${process.env.REACT_APP_MY_KEY}&format=json`)
            .then(response => {
                const trackname = response.data.recenttracks.track[0].name
                const image = response.data.recenttracks.track[0].image[2]['#text']
                const artist = response.data.recenttracks.track[0].artist['#text']
                const albumurl = response.data.recenttracks.track[0].url

                this.setState({
                    nowPlaying: {
                        name: trackname,
                        image: image,
                        artist: artist,
                        albumurl: albumurl
                    }
                })
            })

        
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.nowPlaying !== prevState.nowPlaying) {
            setTimeout(() => {
                axios
                .post(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=houstonsspace&api_key=${process.env.REACT_APP_MY_KEY}&format=json`)
                .then(response => {
                    const trackname = response.data.recenttracks.track[0].name
                    const image = response.data.recenttracks.track[0].image[2]['#text']
                    const artist = response.data.recenttracks.track[0].artist['#text']
                    const albumurl = response.data.recenttracks.track[0].url
    
                    this.setState({
                        nowPlaying: {
                            name: trackname,
                            image: image,
                            artist: artist,
                            albumurl: albumurl
                        }
                    })
                })
            }, 5000)

        } 
    }
    render() {
        return (
            <div className="stuff">
                <p onClick={this.toggleSpotify}><span className='carrot'>></span>     is currently listening to <Flip bottom cascade><span className='actions'>{this.state.nowPlaying.name}</span></Flip></p>
                <SlideDown
                    closed={this.state.openSpotify}
                >
                    <div className='spotify-info'>
                        <a href={this.state.nowPlaying.albumurl} target="_blank" rel="noopener noreferrer">
                            <img className='albumArt' src={this.state.nowPlaying.image} alt="" />
                        </a>
                        <div className="spotify-artist">
                            <p>title: {this.state.nowPlaying.name}</p>
                            <a href={this.state.nowPlaying.albumurl} target="_blank" rel="noopener noreferrer">

                                <p>by: <span className='actions' >{this.state.nowPlaying.artist}</span></p>
                            </a>
                        </div>
                    </div>
                </SlideDown>
            </div>
        )
    }
}

export default Nowplaying