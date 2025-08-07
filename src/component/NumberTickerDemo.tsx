import { NumberTicker } from "@/components/magicui/number-ticker";


type Props = {
  number: number;
  suffix?: string;
};

export function NumberTickerDemo({ number, suffix = "" }:Props) {
  //const formattedNumber = number.toFixed(2); // Ensures float or double with 2 decimals

  return (
    <div className="flex items-end justify-center gap-2">
      {/* Animated Number */}
      <NumberTicker
        value={parseFloat(number.toFixed(2))}
        className="whitespace-pre-wrap text-3xl md:text-4xl lg:text-6xl xl-text-6xl font-medium tracking-tighter text-black dark:text-white text-center"
      />

      {/* Suffix Displayed Next to the Number */}
      {suffix && (
        <span className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-black dark:text-white">
          {suffix}
        </span>
      )}
    </div>
  );
}
