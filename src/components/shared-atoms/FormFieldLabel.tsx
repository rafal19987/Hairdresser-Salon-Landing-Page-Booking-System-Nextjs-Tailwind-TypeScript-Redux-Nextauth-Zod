import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
  className?: string;
  text: string;
  htmlFor: string;
}

export const FormFieldLabel: React.FC<Props> = ({
  children,
  className,
  text,
  htmlFor,
  ...attributes
}) => {
  return (
    <label htmlFor={htmlFor} className={cn('', className)} {...attributes}>
      {text}
    </label>
  );
};
