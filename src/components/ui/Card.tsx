import './Card.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    glossy?: boolean;
}

export default function Card({ children, className = '', glossy = false }: CardProps) {
    const glossyClass = glossy ? 'panel-glossy' : '';

    return (
        <div className={`card ${glossyClass} ${className}`.trim()}>
            {children}
        </div>
    );
}

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
    return <div className={`card-header ${className}`.trim()}>{children}</div>;
}

interface CardBodyProps {
    children: React.ReactNode;
    className?: string;
}

export function CardBody({ children, className = '' }: CardBodyProps) {
    return <div className={`card-body ${className}`.trim()}>{children}</div>;
}

interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
    return <div className={`card-footer ${className}`.trim()}>{children}</div>;
}
