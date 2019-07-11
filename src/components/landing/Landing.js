import React, {Component} from 'react';
import github from './github.png';
import mail from './mail.png';

class Landing extends Component {
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
                            <p><span className='carrot'>></span>    has some <span className='actions'>projects</span></p>
                        </div>
                        <div className="stuff">
                            <p><span className='carrot'>></span>     works with <span className='actions'>skills</span></p>
                        </div>
                        <div className="stuff">
                            <p><span className='carrot'>></span>     has an  <span className='actions'>about</span></p>
                        </div>
                        <div className="stuff">
                            <p><span className='carrot'>></span>     is currently listening to <span className='actions'>music</span></p>
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