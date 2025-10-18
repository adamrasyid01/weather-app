export const getTimeDate = (gmtOffset: number) => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const targetTime = new Date(utc + 3600000 * gmtOffset);

  const time = targetTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const date = targetTime.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return {
    time,     // contoh: "14:32:08"
    date,     // contoh: "Saturday, 18 October 2025"
    iso: targetTime.toISOString(),
    gmt: `GMT${gmtOffset >= 0 ? "+" : ""}${gmtOffset}`,
  };
};
