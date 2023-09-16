export default function englishTimeToBangla(time) {
  const [hours, minutes] = time.split(":");
  const hour = parseInt(hours, 10);
  const isNoon = hour >= 12;
  const isMidnight = hour === 0;
  const banglaHours = convertToBanglaNumber(
    isMidnight ? 12 : isNoon ? hour - 12 : hour
  );
  const banglaMinutes = convertToBanglaNumber(minutes);
  const period = isNoon ? "অপরাহ্ণ" : "পূর্বাহ্ণ";

  return `${banglaHours}:${banglaMinutes} ${isMidnight ? "অপরাহ্ণ" : period}`;
}

function convertToBanglaNumber(number) {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number === 0
    ? "১২"
    : number
        .toString()
        .split("")
        .map((digit) => banglaDigits[digit])
        .join("");
}
