import Wheel from "./wheel";

export const TimerWheel = ({
  value,
  onHourChange,
  onMinuteChange,
}: {
  value: string;
  onHourChange: (hour: number) => void;
  onMinuteChange: (minute: number) => void;
}) => {
  return (
    <div
      style={{
        height: "240px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: 70, height: 180 }}>
        <Wheel
          initIdx={parseInt(value.split(":")[0], 10)}
          length={24}
          width={23}
          loop={true}
          onChange={onHourChange} // Atualiza a hora
        />
      </div>
      <div style={{ width: 70, height: 180 }}>
        <Wheel
          initIdx={parseInt(value.split(":")[1], 10)}
          length={60}
          width={23}
          loop={true}
          perspective="left"
          onChange={onMinuteChange} // Atualiza os minutos
        />
      </div>
    </div>
  );
};
