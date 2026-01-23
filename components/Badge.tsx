
import React from 'react';
import { Status } from '../types';

interface BadgeProps {
  status: Status;
}

const Badge: React.FC<BadgeProps> = ({ status }) => {
  const styles = {
    Approved: "bg-green-50 text-green-800 border-green-100",
    Pending: "bg-yellow-50 text-yellow-800 border-yellow-100",
    Rejected: "bg-red-50 text-red-800 border-red-100"
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border ${styles[status]}`}>
      {status}
    </span>
  );
};

export default Badge;
