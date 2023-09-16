export default function englishDataToBangle(date, weekday = false) {
  const currentDate = new Date(date);
  let serverTime;
  if (weekday) {
    serverTime = currentDate.toLocaleString("bn-BD", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } else {
    serverTime = currentDate.toLocaleString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return serverTime;
}
