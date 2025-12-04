import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold uppercase tracking-wider transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 disabled:opacity-50 disabled:cursor-not-allowed font-sans";
  
  const variants = {
    primary: "bg-brand-yellow text-brand-black border-2 border-brand-black box-shadow-hard hover:bg-white",
    secondary: "bg-brand-red text-white border-2 border-brand-black box-shadow-hard hover:bg-red-600",
    outline: "bg-white text-brand-black border-2 border-brand-black hover:bg-gray-100"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};