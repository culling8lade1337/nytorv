// Illustrated Nytorv cellar entrance at dusk (background layer). Pure SVG, no image files.
const WINDOWS = [70, 290, 510, 730, 950]
export function RestaurantArt({ p }: { p: number }) {
  return (
    <svg className="scene__bg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ transform: `scale(${1 + 0.08 * p})` }}>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3a1230" /><stop offset=".55" stopColor="#b0402f" /><stop offset="1" stopColor="#f2a33c" /></linearGradient>
        <radialGradient id="glow"><stop offset="0" stopColor="#ffd37a" stopOpacity=".95" /><stop offset="1" stopColor="#ffd37a" stopOpacity="0" /></radialGradient>
        <pattern id="check" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#fbf1dc" /><rect width="20" height="20" fill="#b3261e" /><rect x="20" y="20" width="20" height="20" fill="#b3261e" /></pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#sky)" />
      <path d="M0 330V270h180l40-48 40 48h300l40-60 40 60h280l40-50 40 50h240v60z" fill="#4d1a2b" />
      <rect y="330" width="1200" height="400" fill="#efc271" />
      <rect y="322" width="1200" height="16" fill="#c98a3c" />
      {WINDOWS.map((x, i) => (
        <g key={x}>
          <path className="lit" style={{ animationDelay: `${i * 0.7}s` }} d="M0 0v-100a55 55 0 0 1 110 0v100z" transform={`translate(${x} 540)`} fill="#ffdf8e" stroke="#7a3b1c" strokeWidth="7" />
          <path d={`M${x + 55} 385V540M${x} 470H${x + 110}`} stroke="#7a3b1c" strokeWidth="5" />
        </g>
      ))}
      <rect y="700" width="1200" height="100" fill="#2c1820" />
      <path d="M470 720V610a130 130 0 0 1 260 0V720z" fill="#2a0f16" />
      <ellipse className="lit" cx="600" cy="660" rx="95" ry="70" fill="url(#glow)" />
      <path d="M440 535h320l-20 52h-280z" fill="url(#check)" stroke="#7a3b1c" strokeWidth="3" />
      <rect x="520" y="548" width="160" height="30" rx="15" fill="#fbf1dc" />
      <text x="600" y="570" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fill="#7b2d26" letterSpacing="3">NYTORV</text>
      {[410, 790].map(x => (
        <g key={x}><circle className="lit" cx={x} cy="620" r="60" fill="url(#glow)" /><circle cx={x} cy="620" r="11" fill="#ffe7a8" /><path d={`M${x} 520V609`} stroke="#2a0f16" strokeWidth="3" /></g>
      ))}
    </svg>
  )
}
