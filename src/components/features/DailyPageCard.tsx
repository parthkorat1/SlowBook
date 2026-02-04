import { DailyPage, getUserById } from '@/data/mockData';
import './DailyPageCard.css';

interface DailyPageCardProps {
    dailyPage: DailyPage;
}

export default function DailyPageCard({ dailyPage }: DailyPageCardProps) {
    const user = getUserById(dailyPage.userId);

    if (!user) return null;

    return (
        <div className="daily-page-card card animate-fade-in">
            <div className="card-header">
                <div className="flex items-center gap-sm">
                    <div className="avatar">
                        <div className="avatar-placeholder">{user.displayName[0]}</div>
                    </div>
                    <div>
                        <div className="user-name">{user.displayName}</div>
                        <div className="post-meta">
                            📔 Daily Page • {new Date(dailyPage.date).toLocaleDateString()}
                        </div>
                    </div>
                </div>
                <div className="mood-badge" style={{ background: dailyPage.moodColor }}>
                    {dailyPage.mood}
                </div>
            </div>

            <div className="card-body">
                <p className="daily-text">{dailyPage.text}</p>

                {dailyPage.photos && dailyPage.photos.length > 0 && (
                    <div className="photo-grid">
                        {dailyPage.photos.map((photo, idx) => (
                            <div key={idx} className="photo-placeholder">
                                📷 Photo {idx + 1}
                            </div>
                        ))}
                    </div>
                )}

                {dailyPage.music && (
                    <div className="music-player">
                        <span className="music-icon">🎵</span>
                        <div className="music-info">
                            <div className="music-title">{dailyPage.music.title}</div>
                            <div className="music-artist">{dailyPage.music.artist}</div>
                        </div>
                        <button className="play-btn">▶️</button>
                    </div>
                )}
            </div>

            <div className="card-footer">
                <button className="action-btn">❤️ Like</button>
                <button className="action-btn">💬 Comment</button>
                <button className="action-btn">🔗 Share</button>
            </div>
        </div>
    );
}
