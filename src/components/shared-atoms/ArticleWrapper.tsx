import { cn } from '@/lib/utils';

const ArticleWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <article className={cn('flex flex-col items-center w-full', className)}>
      {children}
    </article>
  );
};

export default ArticleWrapper;
