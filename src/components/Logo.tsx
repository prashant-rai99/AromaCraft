export function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform hover:scale-105"
    >
      {/* Molecular ring structure */}
      <circle
        cx="20"
        cy="20"
        r="16"
        stroke="#fbbf24"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="20" cy="8" r="2.5" fill="#fbbf24" />
      <circle cx="30" cy="15" r="2.5" fill="#fbbf24" />
      <circle cx="30" cy="25" r="2.5" fill="#fbbf24" />
      <circle cx="20" cy="32" r="2.5" fill="#fbbf24" />
      <circle cx="10" cy="25" r="2.5" fill="#fbbf24" />
      <circle cx="10" cy="15" r="2.5" fill="#fbbf24" />
      
      {/* Central 'A' letterform with sound wave element */}
      <path
        d="M20 14L24 26H22L21 23H19L18 26H16L20 14Z"
        fill="#1e40af"
      />
      <path
        d="M19.2 21H20.8L20 18.5L19.2 21Z"
        fill="white"
      />
      
      {/* Sound wave lines */}
      <path
        d="M12 20 Q 14 18, 16 20"
        stroke="#1e40af"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M24 20 Q 26 18, 28 20"
        stroke="#1e40af"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
