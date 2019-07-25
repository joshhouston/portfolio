import React, { Component } from 'react';
import pic1 from './uiwars1.PNG'
import group2 from './group2.png'
import Slide from 'react-reveal/Slide';
import back from './back.png';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

class Projects extends Component {
    render() {
        return (
            <Slide right>
                <div className="me-projects">
                    <div className="stuffs">
                        <div className="back">
                            <Link to='/' style={{ color: '#1C1C1C', textDecoration: 'none' }} >
                                <div className="back">
                                    <img src={back} alt="" />
                                    <p>back</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="project-display">

                        <Slider {...settings}>
                            <div>
                                <div className="projectz">
                                    <img className='project-pic' src={pic1} alt="" />
                                    <div className="align">
                                        <h2>UI Wars</h2>
                                        <p>A website where developers of all skill levels can come to practice their UI skills and compare them to other developers. Utilization of Chart.js for real time data display of how many users completed the specific challenge and which tools were used.</p>
                                    </div>
                                    <div className="buttons">
                                        <a href="https://github.com/joshhouston/ui-wars" target="_blank" rel="noopener noreferrer" className='github' > Github</a>
                                        <a href='http://157.230.139.191:5060/#/' target="_blank" rel="noopener noreferrer" className='mail'> Live Site</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="projectz">
                                    <img className='project-pic' src={group2} alt="" />
                                    <div className="align">
                                        <h2>instaPlan</h2>
                                        <p> A group project to make finding current events near you simple and easy. Combined multiple API’s (EventBrite, Google Maps) to ensure a consistent user experience. Implemented Redux for state management throughout the application.Integrated Redux to hold and manage state. Wrote unit and end-to-end tests to run quality assurance on the entire application.</p>
                                    </div>
                                    <div className="buttons">
                                        <a href="https://github.com/instaplan/instaplan" target="_blank" rel="noopener noreferrer" className='github' > Github</a>
                                        <a href='https://github.com/instaplan/instaplan' target="_blank" rel="noopener noreferrer" className='mail'> Live Site</a>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </Slide>

            // <div className="projects" >
            //     <Slide right>
            //         <div className="image">
            //             <Link to='/' style={{ color: '#1C1C1C', textDecoration: 'none' }} >
            //                 <div className="back">
            //                     <img src={back} alt="" />
            //                     <p>back</p>
            //                 </div>
            //             </Link>
            //         </div>
            //         <div className="project-info">
            //             <img className='project-pic' src={pic1} alt="" />
            // <h2>UI Wars</h2>
            // <p>A website where developers of all skill levels can come to practice their UI skills and compare them to other developers. Utilization of Chart.js for real time data display of how many users completed the specific challenge and which tools were used.</p>
            // <div className="buttons">
            //     <a href="https://github.com/joshhouston/ui-wars" target="_blank" rel="noopener noreferrer" className='github' > Github</a>
            //     <a href='' className='mail'> Live Site</a>
            // </div>
            //         </div>
            //         <div className="project-info">
            //             <h2>UI Wars</h2>
            //             <p>A website where developers of all skill levels can come to practice their UI skills and compare them to other developers. Utilization of Chart.js for real time data display of how many users completed the specific challenge and which tools were used.</p>
            //             <div className="buttons">
            //                 <a href="https://github.com/joshhouston/ui-wars" target="_blank" rel="noopener noreferrer" className='github' > Github</a>
            //                 <a href='' className='mail'> Live Site</a>
            //             </div>
            //         </div>
            //     </Slide>
            // </div>
        )
    }
}

export default Projects