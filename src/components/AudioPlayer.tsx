import React, {useState, useRef, useEffect} from 'react';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
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
        <div>
            <audio ref={audioRef} src="/감자튀김%20옴뇸뇸.m4a" loop muted={isMuted}></audio>
            <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
            <div className="hidden md:block"> {/* 데스크탑 환경에서만 볼륨 조절 UI 표시 */}
                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
            </div>
        </div>
    );
};

export default AudioPlayer;
