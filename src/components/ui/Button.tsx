import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
}

export default function Button({
    variant = 'primary',
    size = 'medium',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const variantClass = variant === 'secondary' ? 'btn-secondary' : '';
    const sizeClass = size === 'small' ? 'btn-small' : size === 'large' ? 'btn-large' : '';

    return (
        <button
            className={`btn ${variantClass} ${sizeClass} ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    );
}
