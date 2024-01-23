import { cn } from '@/lib/utils';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...attributes }: Props) => {
  return (
    <button
      className={cn(
        'border border-gray-800 px-4 py-2 rounded uppercase',
        className,
      )}
      type='button'
      {...attributes}
    >
      {children}
    </button>
  );
};
