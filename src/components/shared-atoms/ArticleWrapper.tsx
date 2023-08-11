const ArticleWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="flex flex-col items-center w-full">{children}</article>
  );
};

export default ArticleWrapper;
