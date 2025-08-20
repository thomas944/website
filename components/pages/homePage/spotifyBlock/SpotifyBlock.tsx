import React from 'react';
import styles from './SpotifyBlock.module.css'


const SpotifyBlock = () => {

    const online = false;
    const defaultName = 'love.';
    const defaultArtist = 'wave to earth';
    const defaultImg = 'https://i.scdn.co/image/ab67616d0000485124f8c3ad20b7c6cfecb5832e';
    const defaultUrl = 'https://open.spotify.com/track/5mtTAScDytxMMqZj14NmlN';



    return (
        <div className={styles.container}>
            <div className={styles.largeContainerView}>
                <div className={styles.imgContainer}>
                    <img src={defaultImg} className={styles.img} />
                </div>
                <div className={styles.contentContainer}>
                    <span className={styles.statusTextLarge}>
                        {online ? 'Now Listening' : 'Offline'}</span>
                    <div className={styles.songContainer}>
                        <span className={styles.songName}
                            onClick={() => window.open(defaultUrl, '_blank')}
                        >
                            {defaultName}
                        </span>
                        <span className={styles.songArtists}>{defaultArtist}</span>
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
                    <span className={styles.songNameSmall}
                        onClick={() => window.open(defaultUrl, '_blank')}
                    >
                        {defaultName}
                    </span>
                    <span>{defaultArtist}</span>
                </div>
            </div>
        </div>
    )
}

export default SpotifyBlock