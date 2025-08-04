import { NumberTicker } from "@/components/magicui/number-ticker";

export function NumberTickerDemo({ number, suffix = "" }) {
  const formattedNumber = parseFloat(number).toFixed(2); // Ensures float or double with 2 decimals

  return (
    <div className="flex items-end justify-center gap-2">
      {/* Animated Number */}
      <NumberTicker
        value={formattedNumber}
        className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white text-center"
      />

      {/* Suffix Displayed Next to the Number */}
      {suffix && (
        <span className="text-3xl font-semibold text-black dark:text-white">
          {suffix}
        </span>
      )}
    </div>
  );
}
