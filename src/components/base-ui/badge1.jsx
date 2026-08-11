// src/components/base-ui/badge.jsx
import { cn } from '#lib/utils';

export const Badge1 = ({ className, children, ...props }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-5 py-2 text-[14px] font-bold transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge1;