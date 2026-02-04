'use client';

import { useState } from 'react';
import './MusicPlayer.css';

interface MusicPlayerProps {
    title: string;
    artist: string;
    autoplay?: boolean;
}

export default function MusicPlayer({ title, artist, autoplay = false }: MusicPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(autoplay);

    return (
        <div className="retro-music-player card panel-glossy">
            <div className="player-header">
                <span className="player-icon">🎵</span>
                <span className="player-title">Now Playing</span>
            </div>

            <div className="player-body">
                <div className="album-art">
                    <div className="vinyl-record" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
                        <div className="vinyl-center"></div>
                    </div>
                </div>

                <div className="track-info">
                    <div className="track-title">{title}</div>
                    <div className="track-artist">{artist}</div>
                </div>

                <div className="player-controls">
                    <button className="control-btn">⏮️</button>
                    <button
                        className="control-btn play-pause"
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        {isPlaying ? '⏸️' : '▶️'}
                    </button>
                    <button className="control-btn">⏭️</button>
                </div>

                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '45%' }}></div>
                </div>

                <div className="time-display">
                    <span>1:23</span>
                    <span>3:45</span>
                </div>
            </div>
        </div>
    );
}
