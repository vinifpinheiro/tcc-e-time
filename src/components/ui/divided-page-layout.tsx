export const DividedPageLayout = ({
  children,
  secondaryContent,
}: {
  children: React.ReactNode;
  secondaryContent: React.ReactNode;
}) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-[60vh] w-full p-4">{children}</div>
      <div className="h-[40vh] w-full bg-accent rounded-t-[3rem] p-4">
        {secondaryContent}
      </div>
    </div>
  );
};
