'use client';

import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { mockRooms, getUserById } from '@/data/mockData';
import './rooms.css';

export default function RoomsPage() {
    return (
        <MainLayout>
            <div className="rooms-page">
                <div className="page-header">
                    <div>
                        <h1 className="page-title">👥 My Rooms</h1>
                        <p className="page-subtitle">Small groups, big vibes</p>
                    </div>
                    <button className="btn">+ Create New Room</button>
                </div>

                <div className="rooms-grid">
                    {mockRooms.map((room) => (
                        <Link key={room.id} href={`/rooms/${room.id}`} className="room-card card">
                            <div className="room-avatar">
                                <div className="room-icon">{room.avatar || '👥'}</div>
                            </div>
                            <div className="room-info">
                                <h3 className="room-name">{room.name}</h3>
                                <p className="room-description">{room.description}</p>
                                <div className="room-meta">
                                    <span className="room-members">
                                        👤 {room.members.length} members
                                    </span>
                                    <span className="room-date">
                                        Created {new Date(room.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                            <div className="room-preview">
                                <div className="member-avatars">
                                    {room.members.slice(0, 4).map((memberId) => {
                                        const member = getUserById(memberId);
                                        return member ? (
                                            <div key={memberId} className="avatar avatar-sm">
                                                <div className="avatar-placeholder">{member.displayName[0]}</div>
                                            </div>
                                        ) : null;
                                    })}
                                    {room.members.length > 4 && (
                                        <div className="avatar avatar-sm more-members">
                                            +{room.members.length - 4}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="create-room-cta card panel-glossy">
                    <div className="cta-content">
                        <span className="cta-icon">✨</span>
                        <div>
                            <h3 className="cta-title">Create Your Own Room</h3>
                            <p className="cta-text">Start a cozy space for your closest friends!</p>
                        </div>
                        <button className="btn">Get Started</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
