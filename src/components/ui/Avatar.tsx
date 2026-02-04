import './Avatar.css';

interface AvatarProps {
    name: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    src?: string;
    className?: string;
}

export default function Avatar({ name, size = 'md', src, className = '' }: AvatarProps) {
    const sizeClass = size === 'sm' ? 'avatar-sm' :
        size === 'lg' ? 'avatar-lg' :
            size === 'xl' ? 'avatar-xl' : '';

    return (
        <div className={`avatar ${sizeClass} ${className}`.trim()}>
            {src ? (
                <img src={src} alt={name} />
            ) : (
                <div className="avatar-placeholder">
                    {name.charAt(0).toUpperCase()}
                </div>
            )}
        </div>
    );
}
