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
            openSkills: true ? true: false,
            openAbout: true ? true: false,
            nowPlaying: {
                name: '',
                image: '',
                artist: '',
                albumurl: ''
            }
        }
        
        this.toggle = this.toggle.bind(this);
        this.toggleSpotify = this.toggleSpotify.bind(this);
        this.toggleSkills = this.toggleSkills.bind(this);
        this.toggleAbout = this.toggleAbout.bind(this)
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
    toggleSkills() {
        this.setState({openSkills: false})
        if(this.state.openSkills === false) {
            this.setState({openSkills: true})
        }
    }

    toggleAbout() {
        this.setState({openAbout: false})
        if(this.state.openAbout === false) {
            this.setState({openAbout: true})
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

                        {/* PROJECTS */}
                        <div className="stuff">
                            <p onClick={this.toggle}  ><span className='carrot'>></span>    has some <span className='actions'>projects</span></p>
                            <SlideDown 
                                closed={this.state.open}
                                className={'my-dropdown-slidedown'}>
                                <Projects />
                            </SlideDown>
                        </div>
                        
                        {/* TOOLS */}
                        <div className="stuff">
                            <p onClick={this.toggleSkills} ><span className='carrot'>></span>     likes to  <span className='actions'>use these tools</span></p>
                            <SlideDown 
                                closed={this.state.openSkills}
                                className={'my-dropdown-slidedown'}>
                                <div className="skills">
                                    <i className="devicon-html5-plain-wordmark colored"></i>
                                    <i className="devicon-css3-plain-wordmark colored"></i>
                                    <i className="devicon-sass-original colored"></i>
                                    <i className="devicon-javascript-plain colored"></i>
                                    <i className="devicon-react-original-wordmark colored"></i>
                                    <i className="devicon-nodejs-plain colored"></i>
                                    <i className="devicon-postgresql-plain-wordmark colored"></i>
                                </div>
                            </SlideDown>
                        </div>
                        
                        {/* ABOUT */}
                        <div className="stuff">
                            <p onClick={this.toggleAbout} ><span className='carrot'>></span>     is definitely  <span className='actions'>not a robot</span></p>
                            <SlideDown 
                                closed={this.state.openAbout}
                                className={'my-dropdown-slidedown'}>
                                <div className="about">
                                    <p>Hello! I'm a full stack developer that specializes in <span className="actions">React JS</span>. I love creating beautiful & modern web applications. When I'm not coding, I enjoy creating music, gaming, and <span className="actions">ping pong</span>. </p>
                                </div>
                            </SlideDown>
                        </div>
                        
                        {/* LAST PLAYED/URRENTLY PLAYING */}
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