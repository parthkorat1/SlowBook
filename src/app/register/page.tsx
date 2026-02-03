'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { mockMoods } from '@/data/mockData';
import '../login/login.css';

export default function RegisterPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        displayName: '',
        mood: 'blue'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Mock registration - redirect to home
            router.push('/home');
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-background"></div>
            <div className="auth-container">
                <div className="auth-card panel-glossy">
                    <div className="auth-header">
                        <h1 className="auth-logo">
                            <span className="logo-icon">📱</span>
                            Join RetroSpace
                        </h1>
                        <p className="auth-tagline">Step {step} of 3</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        {step === 1 && (
                            <>
                                <div className="form-group">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        id="username"
                                        type="text"
                                        className="input"
                                        placeholder="Choose a cool username"
                                        value={formData.username}
                                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="input"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        id="password"
                                        type="password"
                                        className="input"
                                        placeholder="Create a strong password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        required
                                    />
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <div className="form-group">
                                    <label htmlFor="displayName" className="form-label">Display Name</label>
                                    <input
                                        id="displayName"
                                        type="text"
                                        className="input"
                                        placeholder="How should we call you?"
                                        value={formData.displayName}
                                        onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                                        required
                                    />
                                    <small className="form-hint">You can use emojis! ✨</small>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Choose Your Vibe</label>
                                    <div className="mood-grid">
                                        {mockMoods.map(mood => (
                                            <label key={mood.id} className="mood-option">
                                                <input
                                                    type="radio"
                                                    name="mood"
                                                    value={mood.id}
                                                    checked={formData.mood === mood.id}
                                                    onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
                                                />
                                                <div className="mood-card" style={{ borderColor: mood.color }}>
                                                    <span className="mood-emoji">{mood.emoji}</span>
                                                    <span className="mood-name">{mood.name}</span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {step === 3 && (
                            <div className="welcome-preview">
                                <h3>Welcome, {formData.displayName || formData.username}! 🎉</h3>
                                <p>Your profile is ready to go!</p>
                                <div className="preview-card card">
                                    <div className="card-body">
                                        <div className="flex items-center gap-md">
                                            <div className="avatar avatar-xl">
                                                <div className="avatar-placeholder">
                                                    {(formData.displayName || formData.username)[0].toUpperCase()}
                                                </div>
                                            </div>
                                            <div>
                                                <h4>{formData.displayName || formData.username}</h4>
                                                <p className="text-secondary">@{formData.username}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex gap-sm">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="btn btn-secondary btn-large"
                                >
                                    Back
                                </button>
                            )}
                            <button type="submit" className="btn btn-large w-full">
                                {step === 3 ? 'Start Using RetroSpace!' : 'Continue'}
                            </button>
                        </div>
                    </form>

                    <div className="auth-divider">
                        <span>or</span>
                    </div>

                    <div className="auth-footer">
                        <p className="auth-footer-text">
                            Already have an account?{' '}
                            <Link href="/login" className="auth-link">Log in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
