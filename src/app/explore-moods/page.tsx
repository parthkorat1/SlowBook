'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { mockMoods } from '@/data/mockData';
import './explore-moods.css';

export default function ExploreMoodsPage() {
    const [selectedMood, setSelectedMood] = useState(mockMoods[0]);

    return (
        <MainLayout>
            <div className="explore-moods-page" data-mood={selectedMood.id}>
                <div className="page-header">
                    <h1 className="page-title">🎨 Explore Moods</h1>
                    <p className="page-subtitle">Find your vibe and customize your experience</p>
                </div>

                <div className="moods-showcase">
                    {mockMoods.map((mood) => (
                        <div
                            key={mood.id}
                            className={`mood-showcase-card card ${selectedMood.id === mood.id ? 'selected' : ''}`}
                            onClick={() => setSelectedMood(mood)}
                            data-mood={mood.id}
                        >
                            <div className="mood-showcase-header" style={{ background: mood.color }}>
                                <span className="mood-showcase-emoji">{mood.emoji}</span>
                            </div>
                            <div className="mood-showcase-body">
                                <h3 className="mood-showcase-name">{mood.name}</h3>
                                <p className="mood-showcase-desc">{mood.description}</p>
                                <div className="mood-color-swatch" style={{ background: mood.color }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mood-preview card panel-glossy">
                    <div className="preview-header">
                        <h2>Preview: {selectedMood.name}</h2>
                        <button className="btn">Apply This Mood</button>
                    </div>

                    <div className="preview-content" data-mood={selectedMood.id}>
                        <div className="preview-section">
                            <h3>Color Scheme</h3>
                            <div className="color-palette">
                                <div className="color-swatch primary" style={{ background: selectedMood.color }}>
                                    <span>Primary</span>
                                </div>
                                <div className="color-swatch secondary">
                                    <span>Secondary</span>
                                </div>
                                <div className="color-swatch accent">
                                    <span>Accent</span>
                                </div>
                            </div>
                        </div>

                        <div className="preview-section">
                            <h3>UI Elements</h3>
                            <div className="ui-preview">
                                <button className="btn">Sample Button</button>
                                <button className="btn btn-secondary">Secondary Button</button>
                                <div className="sample-card card">
                                    <div className="card-header">Sample Card</div>
                                    <div className="card-body">
                                        <p>This is how cards will look with this mood theme.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="preview-section">
                            <h3>What Changes?</h3>
                            <ul className="changes-list">
                                <li>✨ Your profile header background</li>
                                <li>🎨 Button colors and gradients</li>
                                <li>🌈 Navigation highlights</li>
                                <li>💫 Overall app color scheme</li>
                                <li>🎭 Mood badge on daily pages</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mood-tips card">
                    <div className="card-header">💡 Mood Tips</div>
                    <div className="card-body">
                        <ul className="tips-list">
                            <li>Your mood theme affects your entire profile and experience</li>
                            <li>You can change your mood anytime in Settings</li>
                            <li>Each daily page can have its own mood</li>
                            <li>Friends will see your current mood on your profile</li>
                        </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
