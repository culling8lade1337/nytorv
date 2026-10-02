// Foreground: bottle pouring into a glass. `p` (0..1, from scroll) is how full the glass is.
const BOWL = 'M90 330C90 420 120 470 140 470C160 470 190 420 190 330Z'
export function PourArt({ p }: { p: number }) {
  const top = 470 - 125 * p
  return (
    <svg className="scene__fg" viewBox="0 0 400 600" aria-hidden="true">
      <defs>
        <linearGradient id="wine" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a52a45" /><stop offset="1" stopColor="#5a0f24" /></linearGradient>
        <linearGradient id="bottle" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#1d3a2a" /><stop offset=".4" stopColor="#2f6046" /><stop offset="1" stopColor="#13271c" /></linearGradient>
        <clipPath id="bowl"><path d={BOWL} /></clipPath>
      </defs>
      <g clipPath="url(#bowl)"><rect x="80" y={top} width="120" height={125 * p + 8} fill="url(#wine)" /></g>
      <path d={BOWL} fill="rgb(255 255 255 / .08)" stroke="rgb(255 255 255 / .75)" strokeWidth="3" />
      <rect x="137" y="470" width="6" height="72" fill="rgb(255 255 255 / .75)" />
      <ellipse cx="140" cy="545" rx="46" ry="8" fill="none" stroke="rgb(255 255 255 / .75)" strokeWidth="3" />
      {p < 0.97 && <path className="stream" d={`M150 252Q147 300 145 ${top}`} stroke="#9a2440" strokeWidth="5" strokeLinecap="round" fill="none" />}
      <g transform="translate(150 250) rotate(-147) scale(.8)">
        <rect x="-10" y="-2" width="20" height="30" rx="3" fill="#6b1526" />
        <path d="M-9 28V70C-9 100-34 105-34 140V330Q-34 345-19 345H19Q34 345 34 330V140C34 105 9 100 9 70V28Z" fill="url(#bottle)" />
        <rect x="-34" y="190" width="68" height="90" fill="#fbf1dc" /><text x="0" y="242" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fill="#7b2d26">Nytorv</text>
      </g>
    </svg>
  )
}
