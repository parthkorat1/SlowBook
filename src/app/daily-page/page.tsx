'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { currentUser, mockMoods } from '@/data/mockData';
import './daily-page.css';

export default function DailyPagePage() {
    const [text, setText] = useState('');
    const [mood, setMood] = useState('Happy');
    const [photos, setPhotos] = useState<number>(0);

    return (
        <MainLayout>
            <div className="daily-page-container">
                <div className="page-header">
                    <h1 className="page-title">📔 Today's Page</h1>
                    <p className="page-subtitle">One page per day - make it count!</p>
                </div>

                <div className="daily-page-editor card panel-glossy">
                    <div className="editor-header">
                        <div className="date-display">
                            <span className="date-icon">📅</span>
                            <span className="date-text">{new Date().toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                        </div>
                    </div>

                    <div className="editor-body">
                        <div className="form-group">
                            <label className="form-label">How are you feeling? 💭</label>
                            <select
                                className="input mood-select"
                                value={mood}
                                onChange={(e) => setMood(e.target.value)}
                            >
                                <option value="Happy">😊 Happy</option>
                                <option value="Excited">🎉 Excited</option>
                                <option value="Calm">😌 Calm</option>
                                <option value="Inspired">✨ Inspired</option>
                                <option value="Grateful">🙏 Grateful</option>
                                <option value="Thoughtful">🤔 Thoughtful</option>
                                <option value="Energetic">⚡ Energetic</option>
                                <option value="Cozy">☕ Cozy</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">What's on your mind? ✍️</label>
                            <textarea
                                className="input daily-textarea"
                                placeholder="Share your thoughts, experiences, or just how your day went..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                maxLength={500}
                            />
                            <div className="char-count">{text.length}/500 characters</div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Add Photos (Max 3) 📷</label>
                            <div className="photo-upload-grid">
                                {[0, 1, 2].map((idx) => (
                                    <button
                                        key={idx}
                                        className="photo-upload-slot"
                                        onClick={() => setPhotos(Math.min(photos + 1, 3))}
                                    >
                                        {idx < photos ? (
                                            <span className="photo-added">✓ Photo {idx + 1}</span>
                                        ) : (
                                            <span className="photo-empty">+ Add Photo</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Add a Song 🎵</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="Search for a song..."
                            />
                        </div>
                    </div>

                    <div className="editor-footer">
                        <button className="btn btn-secondary">Save as Draft</button>
                        <button className="btn btn-large">Publish Today's Page</button>
                    </div>
                </div>

                <div className="daily-tips card">
                    <div className="card-header">
                        <span>💡 Daily Page Tips</span>
                    </div>
                    <div className="card-body">
                        <ul className="tips-list">
                            <li>You can only post one page per day - make it special!</li>
                            <li>Pages are saved forever in your Memory Box</li>
                            <li>Add music to set the vibe of your day</li>
                            <li>Your mood affects your profile theme</li>
                        </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
