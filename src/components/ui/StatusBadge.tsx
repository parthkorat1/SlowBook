import './StatusBadge.css';

interface StatusBadgeProps {
    status: 'online' | 'away' | 'busy' | 'offline';
    showDot?: boolean;
    showText?: boolean;
}

export default function StatusBadge({ status, showDot = true, showText = false }: StatusBadgeProps) {
    if (showDot && !showText) {
        return <div className={`status-dot ${status}`}></div>;
    }

    if (showText && !showDot) {
        return <span className={`badge badge-${status}`}>{status}</span>;
    }

    return (
        <div className="status-indicator">
            <div className={`status-dot ${status}`}></div>
            {showText && <span className="status-text">{status}</span>}
        </div>
    );
}
