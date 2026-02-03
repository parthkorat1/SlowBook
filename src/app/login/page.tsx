'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './login.css';

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login - just redirect to home
        router.push('/home');
    };

    return (
        <div className="auth-page">
            <div className="auth-background"></div>
            <div className="auth-container">
                <div className="auth-card panel-glossy">
                    <div className="auth-header">
                        <h1 className="auth-logo">
                            <span className="logo-icon">📱</span>
                            RetroSpace
                        </h1>
                        <p className="auth-tagline">Connect with friends the old-school way</p>
                    </div>

                    <form onSubmit={handleLogin} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">Username or Email</label>
                            <input
                                id="username"
                                type="text"
                                className="input"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                id="password"
                                type="password"
                                className="input"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-options">
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="forgot-link">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn btn-large w-full">
                            Log In
                        </button>
                    </form>

                    <div className="auth-divider">
                        <span>or</span>
                    </div>

                    <div className="auth-footer">
                        <p className="auth-footer-text">
                            Don't have an account?{' '}
                            <Link href="/register" className="auth-link">Sign up now!</Link>
                        </p>
                    </div>
                </div>

                <div className="auth-features">
                    <div className="feature-item">
                        <span className="feature-icon">📔</span>
                        <span className="feature-text">Daily Pages</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">👥</span>
                        <span className="feature-text">Private Rooms</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">💬</span>
                        <span className="feature-text">Retro Chat</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">🎨</span>
                        <span className="feature-text">Custom Profiles</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
