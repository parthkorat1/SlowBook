'use client';

import { useState } from 'react';
import './StickerPicker.css';

const stickers = [
    '⭐', '✨', '💫', '🌟', '💖', '💕', '💗', '💓',
    '🌈', '🦋', '🌸', '🌺', '🌻', '🌼', '🍀', '🌙',
    '☀️', '⛅', '🌤️', '🌥️', '☁️', '🌦️', '🌧️', '⛈️',
    '🎵', '🎶', '🎸', '🎹', '🎤', '🎧', '🎮', '🎯',
    '🎨', '🖌️', '✏️', '📝', '📚', '📖', '💌', '💝',
    '🎀', '🎁', '🎈', '🎉', '🎊', '🎂', '🍰', '🧁'
];

interface StickerPickerProps {
    onSelect?: (sticker: string) => void;
}

export default function StickerPicker({ onSelect }: StickerPickerProps) {
    const [selectedStickers, setSelectedStickers] = useState<string[]>([]);

    const handleStickerClick = (sticker: string) => {
        setSelectedStickers([...selectedStickers, sticker]);
        onSelect?.(sticker);
    };

    return (
        <div className="sticker-picker card">
            <div className="card-header">
                <span>✨ Sticker Collection</span>
            </div>
            <div className="card-body">
                <div className="sticker-grid">
                    {stickers.map((sticker, idx) => (
                        <button
                            key={idx}
                            className="sticker-btn"
                            onClick={() => handleStickerClick(sticker)}
                            title={`Add ${sticker}`}
                        >
                            {sticker}
                        </button>
                    ))}
                </div>

                {selectedStickers.length > 0 && (
                    <div className="selected-stickers">
                        <div className="selected-label">Your Stickers:</div>
                        <div className="selected-display">
                            {selectedStickers.map((sticker, idx) => (
                                <span key={idx} className="selected-sticker">
                                    {sticker}
                                </span>
                            ))}
                        </div>
                        <button
                            className="btn btn-small btn-secondary"
                            onClick={() => setSelectedStickers([])}
                        >
                            Clear All
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
