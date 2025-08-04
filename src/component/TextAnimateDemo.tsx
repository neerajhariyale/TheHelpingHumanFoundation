import { TextAnimate } from "@/components/magicui/text-animate";

export function TextAnimateDemo() {
  return (
    <TextAnimate animation="blurInUp" by="character" once className="text-sm sm:text-base md:text-lg px-2 md:px-6">
      The Helping Human Foundation is a non-profit NGO dedicated to serving
          underprivileged communities through initiatives in education,
          healthcare, women empowerment, and social welfare, aiming to create
          lasting positive change.
    </TextAnimate>
  );
}
