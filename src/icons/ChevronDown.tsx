export default function ChevronDown({
  className = "",
  up = false,
}: {
  className?: string;
  up?: boolean;
}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${up ? "rotate-180" : ""}`}
      style={{ transition: "transform 0.2s ease" }}
    >
      <path
        d="M12.25 10.25L8 5.75L3.75 10.25"
        stroke="#0500FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
