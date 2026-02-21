import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href
}: ButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples([...ripples, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
    
    onClick?.();
  };

  const baseClasses = "px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 relative overflow-hidden";

  const variantClasses = {
    primary: "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/70",
    secondary: "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/70",
    outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/50"
  };

  const Component = motion.button;

  const content = (
    <Component
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={handleClick}
    >
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute w-5 h-5 bg-white/30 rounded-full pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </Component>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
