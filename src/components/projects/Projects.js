import React, { Component } from 'react';
import Slider from "react-slick";
import pic1 from './uiwars1.PNG'
import Slide from 'react-reveal/Slide';
import back from './back.png'
import { Link } from 'react-router-dom'


class Projects extends Component {
    render() {
        return (
            <div className="projects" >
                <Slide right>
                    <div className="image">
                        <Link to='/' style={{ color: '#1C1C1C', textDecoration: 'none' }} >
                            <div className="back">
                                <img src={back} alt="" />
                                <p>back</p>
                            </div>
                        </Link>
                        <img className='project-pic' src={pic1} alt="" />
                    </div>
                    <div className="project-info">
                        <h2>UI Wars</h2>
                        <p>A website where developers of all skill levels can come to practice their UI skills and compare them to other developers. Utilization of Chart.js for real time data display of how many users completed the specific challenge and which tools were used.</p>
                        <div className="buttons">
                            <a href="https://github.com/joshhouston/ui-wars" target="_blank" rel="noopener noreferrer" className='github' > Github</a>
                            <a href='' className='mail'> Live Site</a>
                        </div>
                    </div>

                </Slide>
            </div>
        )
    }
}

export default Projects