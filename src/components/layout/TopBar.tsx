'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { currentUser } from '@/data/mockData';
import './TopBar.css';

export default function TopBar() {
    const pathname = usePathname();

    return (
        <div className="topbar">
            <div className="topbar-container">
                <div className="topbar-left">
                    <Link href="/home" className="topbar-logo">
                        <span className="logo-icon">📱</span>
                        <span className="logo-text">RetroSpace</span>
                    </Link>

                    <div className="topbar-search">
                        <input
                            type="text"
                            placeholder="Search friends, rooms..."
                            className="search-input"
                        />
                        <button className="search-btn">🔍</button>
                    </div>
                </div>

                <div className="topbar-right">
                    <Link href="/home" className={`topbar-link ${pathname === '/home' ? 'active' : ''}`}>
                        🏠 Home
                    </Link>
                    <Link href="/daily-page" className={`topbar-link ${pathname === '/daily-page' ? 'active' : ''}`}>
                        📔 Daily Page
                    </Link>
                    <Link href="/rooms" className={`topbar-link ${pathname === '/rooms' ? 'active' : ''}`}>
                        👥 Rooms
                    </Link>
                    <Link href="/chat" className={`topbar-link ${pathname === '/chat' ? 'active' : ''}`}>
                        💬 Chat
                        <span className="notification-badge">3</span>
                    </Link>

                    <div className="topbar-user">
                        <div className="avatar avatar-sm">
                            <div className="avatar-placeholder">{currentUser.displayName[0]}</div>
                        </div>
                        <span className="user-name">{currentUser.displayName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
