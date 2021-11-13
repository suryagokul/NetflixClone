import React,{useState, useRef, useEffect} from 'react'
import { View, Text, Button } from 'react-native';
import {Episode} from '../../types';
import {Video, AVPlaybackStatus} from 'expo-av';
import styles from './styles';
import { Playback } from 'expo-av/build/AV';

interface VideoPlayerProps{
    episode: Episode;   
}

const VideoPlayer = (props: VideoPlayerProps) => {

    const {episode} = props;
    const video = React.useRef<Playback>(null);
    const [status, setStatus] = React.useState({});
    // console.log(episode.video);

    useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: episode.video },
                {},
                false
            );
        })();
    }, [episode])

    return (
                <Video
                // ref={video}
                style={styles.video}
                source={{uri: episode.video}}
                posterSource={{uri:episode.poster}}
                usePoster={true}
                posterStyle={{
                    resizeMode:'cover'
                }}
                useNativeControls
                resizeMode="contain"
                isLooping={false}
                shouldPlay={false}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
    )
}

export default VideoPlayer
