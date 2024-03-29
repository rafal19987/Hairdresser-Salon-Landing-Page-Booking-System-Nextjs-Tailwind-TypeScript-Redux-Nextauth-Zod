import { cn } from '@/lib/utils';

export const FormFieldContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn('flex flex-col gap-1 w-full', className)}>
      {children}
    </div>
  );
};
