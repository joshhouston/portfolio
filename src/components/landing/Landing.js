import React, {Component} from 'react';
import github from './github.png';
import mail from './mail.png';
import myresume from './resume.pdf'
import {SlideDown} from 'react-slidedown';
import Nowplaying from '../nowplaying/Nowplaying';
import 'react-slidedown/lib/slidedown.css';
import {Link} from 'react-router-dom'
// import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


class Landing extends Component {
    constructor() {
        super();
        
        this.state = {
            open: true ? true: false,
            openSpotify: true ? true: false,
            openSkills: true ? true: false,
            openAbout: true ? true: false,
            test: '',
            
        }
        
        this.toggle = this.toggle.bind(this);
        this.toggleSkills = this.toggleSkills.bind(this);
        this.toggleAbout = this.toggleAbout.bind(this)
    }

    toggle() {
        this.setState({open: false})
        if(this.state.open === false) {
            this.setState({open: true})
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


    render() {
        return (
            <div className='landing' >
                <Fade cascade>
                <div className="landing-stuff">
                    <div className="header">
                        <h1>Hello, I'm Josh</h1>
                        <p>A full-stack developer that-</p>
                    </div>
                    <div className="main">

                        {/* PROJECTS */}
                        <Link to='/projects'  style={{ color:'#1C1C1C', textDecoration: 'none' }}>
                            <div className="stuff">
                                <p><span className='carrot'>></span>    has some <span className='actions'>projects</span></p>
                            </div>
                        </Link>
                        
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
                        <div className="stuff">
                            <Nowplaying />
                        </div>
                    </div>
                    <div className="resume">
                        <p>Check out my <a href={myresume} target="_blank" rel="noopener noreferrer">Resume</a> or <a href="https://www.linkedin.com/in/houstonjoshua/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>
                    <div className="buttons">
                        <a href="http://github.com/joshhouston" target="_blank" rel="noopener noreferrer" className='github' > <img className='github-icon' src={github} alt=""/> Github</a>
                        <a href='mailto:jjoshhouston@gmail.com' className='mail'> <img src="" alt=""/> <img className='github-icon' src={mail} alt=""/> Contact</a>
                    </div>
                </div>
                </Fade>
            </div>
        )
    }
}

export default Landing