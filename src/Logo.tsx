import "./Logo.css";

type LogoProps = {
  className?: string;
  withWordmark?: boolean;
};

export default function Logo({ className = "", withWordmark = true }: LogoProps) {
  return (
    <span className={`logo ${withWordmark ? "logo--full" : "logo--mark"} ${className}`}>
      <svg
        className="logo__mark"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="8" fill="#0E2219" />
        <text
          x="20"
          y="26.5"
          textAnchor="middle"
          fontFamily="Anybody, Arial Black, Arial, sans-serif"
          fontSize="15"
          fontWeight="800"
          letterSpacing="-0.5"
        >
          <tspan fill="#D8F0E0">S</tspan>
          <tspan fill="#7DCF95">W</tspan>
        </text>
      </svg>
      {withWordmark ? (
        <span className="logo__word">
          Savo<span>Web</span>
        </span>
      ) : null}
    </span>
  );
}
