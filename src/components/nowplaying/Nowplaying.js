import React, { useEffect, useState } from 'react';
import { SlideDown } from 'react-slidedown';
import Fade from 'react-reveal';
import axios from 'axios';


function Nowplaying() {

    const [openMedia, setOpenMedia] = useState(true);
    const [nowPlayingTitle, setNowPlayingTitle] = useState([]);
    const [artist, setArtist] = useState([]);
    const [albumArt, setAlbumArt] = useState([]);
    const [musicURL, setMusicURL] = useState([]);

    const getNowPlaying = async () => {
        await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=houstonsspace&api_key=${process.env.REACT_APP_MY_KEY}&format=json`)
            .then((res) => {
                setNowPlayingTitle(res.data.recenttracks.track[0].name);
                setArtist(res.data.recenttracks.track[0].artist['#text']);
                setAlbumArt(res.data.recenttracks.track[0].image[2]['#text']);
                setMusicURL(res.data.recenttracks.track[0].url);
            })
            .catch((error) => { })
    }

    useEffect(() => {
        const timer = setInterval(getNowPlaying, 2000);
        return () => clearInterval(timer)
    }, [])


    return (
        <div className="stuff">
            <p onClick={() => setOpenMedia(!openMedia)}><span className='carrot'>></span>     is currently listening to <Fade cascade><span className='actions'>{nowPlayingTitle}</span></Fade></p>
            <SlideDown closed={openMedia}>
                <div className='spotify-info'>
                    <a href={musicURL} target="_blank" rel="noopener noreferrer">
                        <img className='albumArt' src={albumArt} alt="" />
                    </a>
                    <div className="spotify-artist">
                        <p>title: {nowPlayingTitle}</p>
                        <a href={musicURL} target="_blank" rel="noopener noreferrer">

                            <p>by: <span className='actions' >{artist}</span></p>
                        </a>
                    </div>
                </div>
            </SlideDown>
        </div>
    )
}

export default Nowplaying;