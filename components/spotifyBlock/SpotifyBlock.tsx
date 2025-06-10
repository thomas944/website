import React, { useState, useEffect } from 'react';
import { colors } from '@/utils/colors'
import styles from './SpotifyBlock.module.css'

interface ImageData {
    height: number;
    url: string;
    width: number;
}

interface TrackData {
    name: string;
    artists: string[];
    images: {
        large: string;
        medium: string;
        small: string;
        all: ImageData[]
    }
}
interface SongData {
    success: boolean;
    online: boolean;
    track: TrackData;
    progress: number;
    duration: number;
}

const SpotifyBlock = () => {
    const [online, setOnline] = useState(false)
    const [song, setSong] = useState('')
    const [artists, setArtists] = useState('')
    const [img, setImg] = useState('')


    useEffect(() => {
        const fetchSong = async () => {
            try {
                const res = await fetch("http://127.0.0.1:3000/status")
                const songData: SongData = await res.json();
                setOnline(songData.online)
                setSong(songData.track.name)
                setArtists(songData.track.artists.join(', '))
                setImg(songData.track.images.small)
            } catch (error) {
                console.error('Failed to fetch song:', error)
            }
        };

        fetchSong()
        const interval = setInterval(fetchSong, 10 * 1000)

        return () => clearInterval(interval);
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.largeContainerView}>
                <div className={styles.imgContainer}>
                    <img src={img} className={styles.img} />
                </div>
                <div className={styles.contentContainer}>
                    <span className={styles.statusTextLarge}>{online ? 'Now Listening' : 'Offline'}</span>
                    <div className={styles.songContainer}>
                        <span className={styles.songName}>{song}</span>
                        <span className={styles.songArtists}>{artists}</span>
                    </div>

                </div>
            </div>

            <div className={styles.smallContainerView}>
                <div className={styles.statusTextSmall}>
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
                    <span>{song}</span>
                    <span>{artists}</span>
                </div>
            </div>
        </div>
    )
}

export default SpotifyBlock