import React, {Component} from 'react';
import github from './github.png';
import mail from './mail.png';
import Projects from '../projects/Projects';
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import LastFm from 'lastfm-listener';


const options = {
    api_key: process.env.REACT_APP_MY_KEY,
    username: 'houstonsspace',
    rate: 5
}
const lastfm = new LastFm(options);


class Landing extends Component {
    constructor() {
        super();
        
        this.state = {
            open: true ? true: false,
            openSpotify: true ? true: false,
            nowPlaying: {
                name: '',
                image: '',
                artist: '',
                albumurl: ''
            }
        }
        
        this.toggle = this.toggle.bind(this);
        this.toggleSpotify = this.toggleSpotify.bind(this);
    }

    toggle() {
        this.setState({open: false})
        if(this.state.open === false) {
            this.setState({open: true})
        }
    }
    toggleSpotify() {
        this.setState({openSpotify: false})
        if(this.state.openSpotify === false) {
            this.setState({openSpotify: true})
        }
    }
    

    
    componentDidMount() {
        lastfm.getLatestSong(song => {
            this.setState({nowPlaying: {
                name: song.name,
                artist: song.artist['#text'],
                image: song.image[2]['#text'],
                albumurl: song.url
            }})
        })
        
    }

    render() {
        return (
            <div className='landing' >
                <div className="landing-stuff">
                    <div className="header">
                        <h1>Hello, I'm Josh</h1>
                        <p>A full-stack developer that-</p>
                    </div>
                    <div className="main">
                        <div className="stuff">
                            <p onClick={this.toggle}  ><span className='carrot'>></span>    has some <span className='actions'>projects</span></p>
                            <SlideDown 
                                closed={this.state.open}
                                className={'my-dropdown-slidedown'}>
                                <Projects />
                            </SlideDown>
                        </div>
                        <div className="stuff">
                            <p><span className='carrot'>></span>     works with <span className='actions'>skills</span></p>

                        </div>
                        <div className="stuff">
                            <p><span className='carrot'>></span>     is definitely  <span className='actions'>not a robot</span></p>
                        </div>
                        <div className="stuff">
                            <p  onClick={this.toggleSpotify}><span className='carrot'>></span>     is currently listening to <span className='actions'>{this.state.nowPlaying.name}</span></p>
                            <SlideDown
                                closed={this.state.openSpotify}
                            >
                                <div className='spotify-info'>
                                    <a href={this.state.nowPlaying.albumurl} target="_blank" rel="noopener noreferrer">
                                        <img className='albumArt' src={this.state.nowPlaying.image} alt=""/>
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
                    </div>
                    <div className="resume">
                        <p>Check out my <a href="http://github.com/joshhouston" target="_blank" rel="noopener noreferrer">Resume</a></p>
                    </div>
                    <div className="buttons">
                        <a href="http://github.com/joshhouston" target="_blank" rel="noopener noreferrer" className='github' > <img className='github-icon' src={github} alt=""/> Github</a>
                        <a href='mailto:jjoshhouston@gmail.com' className='mail'> <img src="" alt=""/> <img className='github-icon' src={mail} alt=""/> Contact</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Landing