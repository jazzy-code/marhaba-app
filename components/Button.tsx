
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'danger';
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  icon?: LucideIcon;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  icon: Icon,
  disabled = false,
  type = 'button'
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-[10px] md:text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#2F2003] text-white hover:opacity-90 shadow-md",
    secondary: "bg-transparent border border-[#E7E5E4] text-[#2F2003] hover:bg-[#F9F8F6]",
    accent: "bg-[#B08D57] text-white hover:opacity-90 shadow-md",
    ghost: "bg-transparent text-[#2F2003] hover:bg-black/5",
    outline: "bg-transparent border border-[#2F2003] text-[#2F2003] hover:bg-[#2F2003] hover:text-white",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;
