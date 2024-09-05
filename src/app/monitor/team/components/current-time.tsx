"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);



export default function UserCurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const detectedTimezone = dayjs.tz.guess();

  const timezoneNamesPTBR: Record<string, string> = {
  "America/Sao_Paulo": "Horário de Brasília",
  "America/Manaus": "Horário de Manaus",
  "America/Fortaleza": "Horário de Fortaleza",
  "America/Recife": "Horário de Recife",
  "America/Cuiaba": "Horário de Cuiabá",
  "America/Rio_Branco": "Horário do Acre",
  "America/New_York": "Horário da Costa Leste (EUA)",
  "America/Chicago": "Horário Central (EUA)",
  "America/Denver": "Horário das Montanhas (EUA)",
  "America/Los_Angeles": "Horário do Pacífico (EUA)",
  "Europe/London": "Horário de Londres",
  "Europe/Paris": "Horário de Paris",
  "Europe/Berlin": "Horário de Berlim",
  "Asia/Tokyo": "Horário de Tóquio",
  "Asia/Shanghai": "Horário de Xangai",
  "Australia/Sydney": "Horário de Sydney",
  // Adicione mais conforme necessário
};

  return (
    <div className="flex flex-col gap-1 mt-2">
      <p className="text-center font-bold">
        {dayjs(currentTime).tz(detectedTimezone).format("HH:mm:ss")}
      </p>
      <p className="text-center text-sm text-muted-foreground">
        {timezoneNamesPTBR[detectedTimezone]}
      </p>
    </div>
  );
}
