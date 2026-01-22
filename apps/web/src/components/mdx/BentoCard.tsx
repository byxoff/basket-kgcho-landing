import React from 'react';

interface BentoCardProps {
  title: string;
  icon?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'highlight' | 'muted';
}

export const BentoCard: React.FC<BentoCardProps> = ({ 
  title, 
  icon, 
  children,
  variant = 'default'
}) => {
  const variantStyles = {
    default: 'bg-white border-2 border-gray-200',
    highlight: 'bg-orange-50 border-2 border-orange-300',
    muted: 'bg-gray-50 border-2 border-gray-100',
  };

  return (
    <div className={`p-6 rounded-xl ${variantStyles[variant]} my-4 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-center gap-3 mb-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      {children && (
        <div className="text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};
