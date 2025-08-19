import React, { useState, useEffect } from 'react';
import { colors } from '@/utils/colors'
import styles from './SpotifyBlock.module.css'


interface TrackData {
    name: string;
    artists: string[];
    image: string;
    url: string;
}

interface SongData {
    success: boolean;
    details?: string;
    online: boolean;
    track: TrackData;
}

const SpotifyBlock = () => {
    const [online, setOnline] = useState(false)
    const [song, setSong] = useState('')
    const [artists, setArtists] = useState('')
    const [img, setImg] = useState('')
    const [url, setUrl] = useState('')

    const defaultName = 'love.';
    const defaultArtist = 'wave to earth';
    const defaultImg = 'https://i.scdn.co/image/ab67616d0000485124f8c3ad20b7c6cfecb5832e';
    const defaultUrl = 'https://open.spotify.com/track/5mtTAScDytxMMqZj14NmlN';

    // useEffect(() => {
    //     const fetchSong = async () => {
    //         try {
    //             const res = await fetch("process.env.SPOTIFY_API_URL")
    //             const songData: SongData = await res.json();
    //             setOnline(songData.online)
    //             setSong(songData.track.name)
    //             setArtists(songData.track.artists.join(', '))
    //             setImg(songData.track.image)
    //             setUrl(songData.track.url)
    //         } catch (error) {
    //             console.error('Failed to fetch song:', error)
    //         }
    //     };

    //     fetchSong()
    //     const interval = setInterval(fetchSong, 300 * 1000)

    //     return () => clearInterval(interval);
    // }, []);


    return (
        <div className={styles.container}>
            <div className={styles.largeContainerView}>
                <div className={styles.imgContainer}>
                    <img src={img || defaultImg} className={styles.img} />
                </div>
                <div className={styles.contentContainer}>
                    <span className={styles.statusTextLarge}
                          onClick={() => window.open(url || defaultUrl, '_blank')}>
                        {online ? 'Now Listening' : 'Offline'}</span>
                    <div className={styles.songContainer}>
                        <span className={styles.songName}>{song || defaultName}</span>
                        <span className={styles.songArtists}>{artists || defaultArtist}</span>
                    </div>

                </div>
            </div>

            <div className={styles.smallContainerView}>
                <div className={styles.statusTextSmall} 
                    onClick={() => window.open(url || defaultUrl, '_blank')}>
                    {online ? (
                        <>
                            <span>Now</span>
                            <span>Listening</span> 
                        </>
                  
                    ) : (
                        <span>Offline</span>
                    )}
                 
                </div>
                <div className={styles.songTextSmall}>
                    <span>{song || defaultName}</span>
                    <span>{artists || defaultArtist}</span>
                </div>
            </div>
        </div>
    )
}

export default SpotifyBlock