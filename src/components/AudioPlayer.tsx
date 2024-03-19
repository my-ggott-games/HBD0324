import React, {useState, useRef, useEffect} from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { FaPlay, FaPause } from "react-icons/fa"; // Fa6 대신 Fa로 수정

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [hasPlayed, setHasPlayed] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current.muted = isMuted;
        }
    }, [volume, isMuted]);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (audio) {
            const isAudioPlaying = !isPlaying;
            setIsPlaying(isAudioPlaying);
            setHasPlayed(true);
            isAudioPlaying ? audio.play() : audio.pause();
        }
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        setVolume(!isMuted ? 0 : 1);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-sm font-pyeongchang-light">
                {hasPlayed ? <><br/>헤헤 🥰</> : (
                    <>
                        아이폰으로 하나하나 편집해서 브금 만들어왔는데~~
                        <br/>아나따가 들어줬음 좋게따~~ 🥺
                    </>
                )}
            </p>
            <div className="flex items-center">
                <audio ref={audioRef} src="/감자튀김%20옴뇸뇸.m4a" loop muted={isMuted}></audio>

                <button onClick={togglePlayPause}>
                    {isPlaying ? <FaPause/> : <FaPlay/>}
                </button>
                <div className="hidden md:block">
                    <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange}/>
                </div>
                <button onClick={toggleMute}>
                    {isMuted ? <FaVolumeMute/> : <FaVolumeUp/>}
                </button>

            </div>
        </div>
    );
};

export default AudioPlayer;
