import React, { useState, useEffect } from 'react';
import { colors } from '@/utils/colors'

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
        <div style={{ height: '100%', width: '100%', backgroundColor: colors.darkBlue, borderRadius: '1rem', padding: '1rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '25%' }}>
                <img src={img} style={{ borderRadius: '1rem' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '75%', height: '100%' }} >
                <span style={{ color: colors.white, fontSize: '2rem', fontWeight: 600 }}>{online ? 'Now Listening' : 'Offline'}</span>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
                    <span style={{ color: colors.lightBlue, fontSize: '1.5rem', fontWeight: 500, lineHeight: 1 }}>{song}</span>
                    <span style={{ color: colors.lightBlue, fontSize: '1.5rem', fontWeight: 500 }}>{artists}</span>
                </div>

            </div>
        </div>
    )
}

export default SpotifyBlock