type TimerCircleProps = {
  percentage: number;
  children: React.ReactNode;
};

export const TimerCircle = ({
  percentage = 40,
  children,
}: TimerCircleProps) => {
  return (
    <div className="h-full flex items-center w-full justify-center transition-all ease-in-out duration-150">
      <div className="relative w-72 h-72 rounded-full flex items-center justify-center transition-all ease-in-out duration-150">
        <div
          className="absolute w-full h-full rounded-full transition-all ease-in-out duration-150"
          style={{
            background: `conic-gradient(hsl(var(--primary)) 0% ${percentage}%, hsl(var(--accent)) ${percentage}% 100%)`,
            mask: "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 0)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 0)",
          }}
        ></div>
        <div>{children}</div>
      </div>
    </div>
  );
};
