'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mockUsers } from '@/data/mockData';
import './Sidebar.css';

export default function Sidebar() {
    const pathname = usePathname();
    const onlineFriends = mockUsers.filter(u => u.status === 'online').slice(0, 8);

    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">Navigation</h3>
                <nav className="sidebar-nav">
                    <Link href="/home" className={`sidebar-nav-item ${pathname === '/home' ? 'active' : ''}`}>
                        <span className="nav-icon">🏠</span>
                        <span>Home Feed</span>
                    </Link>
                    <Link href="/daily-page" className={`sidebar-nav-item ${pathname === '/daily-page' ? 'active' : ''}`}>
                        <span className="nav-icon">📔</span>
                        <span>My Daily Page</span>
                    </Link>
                    <Link href="/rooms" className={`sidebar-nav-item ${pathname === '/rooms' ? 'active' : ''}`}>
                        <span className="nav-icon">👥</span>
                        <span>My Rooms</span>
                    </Link>
                    <Link href="/chat" className={`sidebar-nav-item ${pathname === '/chat' ? 'active' : ''}`}>
                        <span className="nav-icon">💬</span>
                        <span>Messenger</span>
                    </Link>
                    <Link href="/memory-box" className={`sidebar-nav-item ${pathname === '/memory-box' ? 'active' : ''}`}>
                        <span className="nav-icon">📦</span>
                        <span>Memory Box</span>
                    </Link>
                    <Link href="/profile/sarah_2010" className={`sidebar-nav-item ${pathname.startsWith('/profile') ? 'active' : ''}`}>
                        <span className="nav-icon">👤</span>
                        <span>My Profile</span>
                    </Link>
                    <Link href="/explore-moods" className={`sidebar-nav-item ${pathname === '/explore-moods' ? 'active' : ''}`}>
                        <span className="nav-icon">🎨</span>
                        <span>Explore Moods</span>
                    </Link>
                    <Link href="/settings" className={`sidebar-nav-item ${pathname === '/settings' ? 'active' : ''}`}>
                        <span className="nav-icon">⚙️</span>
                        <span>Settings</span>
                    </Link>
                </nav>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Online Friends ({onlineFriends.length})</h3>
                <div className="friends-list">
                    {onlineFriends.map(friend => (
                        <Link
                            key={friend.id}
                            href={`/profile/${friend.username}`}
                            className="friend-item"
                        >
                            <div className="friend-avatar">
                                <div className="avatar avatar-sm">
                                    <div className="avatar-placeholder">{friend.displayName[0]}</div>
                                </div>
                                <div className={`status-dot ${friend.status}`}></div>
                            </div>
                            <div className="friend-info">
                                <div className="friend-name">{friend.displayName}</div>
                                <div className="friend-status">{friend.status}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="sidebar-footer">
                <div className="sidebar-ad panel-glossy">
                    <div className="ad-content">
                        <span className="ad-emoji">✨</span>
                        <p className="ad-text">Customize your profile!</p>
                        <Link href="/settings" className="ad-link">Get Started →</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
