/**
 * GeometricAccent — abstract technical line art
 *
 * An SVG composition of:
 *   - A sparse constellation: small node circles connected by thin edges
 *   - Two overlapping arcs suggesting orbits or data relationships
 *   - A faint outer ring
 *
 * The "data graph" aesthetic nods to Mihaly's background in data
 * engineering and AI without being literal or on-the-nose.
 *
 * Animation: the entire group slow-rotates (30s cycle) and the nodes
 * subtly pulse opacity on their own offsets for a breathing effect.
 * Both animations are suppressed by prefers-reduced-motion.
 *
 * Design choices:
 * - Stroke width 0.6–1px — below the threshold of "visible design
 *   element", reads as texture at a distance
 * - Opacity 0.13–0.18 in accent blue — present but never competing
 * - Size 360px — large enough to cover a corner, small enough not to
 *   dominate on mobile
 */

interface GeometricAccentProps {
  className?: string;
  /** SVG size (width = height). Default: 360 */
  size?: number;
  /** Base stroke/fill color. Default: #3b82f6 */
  color?: string;
}

/* Node positions (normalised 0–100 within the viewBox 0 0 100 100) */
const NODES: Array<{ cx: number; cy: number; r: number }> = [
  { cx: 50, cy: 50, r: 1.4 },  // centre
  { cx: 22, cy: 28, r: 1.0 },  // top-left
  { cx: 76, cy: 20, r: 1.2 },  // top-right
  { cx: 80, cy: 68, r: 1.0 },  // right
  { cx: 35, cy: 78, r: 0.9 },  // bottom-left
  { cx: 60, cy: 36, r: 0.75 }, // mid cluster 1
  { cx: 42, cy: 55, r: 0.75 }, // mid cluster 2
  { cx: 18, cy: 60, r: 0.8 },  // left
  { cx: 68, cy: 82, r: 0.9 },  // bottom-right
];

/* Edges (pairs of NODES indices) */
const EDGES: Array<[number, number]> = [
  [0, 5], [0, 6], [0, 2],
  [1, 5], [1, 6], [1, 7],
  [2, 5], [2, 3],
  [3, 0], [3, 8],
  [4, 6], [4, 7], [4, 8],
  [5, 6],
  [7, 6],
];

export function GeometricAccent({
  className = "",
  size = 360,
  color = "#3b82f6",
}: GeometricAccentProps) {
  return (
    <>
      {/* Keyframes injected inline so the component is self-contained */}
      <style>{`
        @keyframes geo-rotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes geo-pulse-a {
          0%, 100% { opacity: 0.9; }
          50%       { opacity: 0.45; }
        }
        @keyframes geo-pulse-b {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 0.95; }
        }
        @media (prefers-reduced-motion: reduce) {
          .geo-rotate { animation: none !important; }
          .geo-node   { animation: none !important; }
        }
      `}</style>

      <svg
        aria-hidden="true"
        className={`pointer-events-none ${className}`}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/*
         * Outer ring — faint reference circle that the constellation
         * feels loosely inscribed within
         */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke={color}
          strokeWidth="0.5"
          strokeDasharray="2 5"
          opacity="0.35"
        />

        {/*
         * Rotating group — the entire graph slowly turns.
         * transform-origin must be the SVG centre (50 50 in userSpace).
         */}
        <g
          className="geo-rotate"
          style={{
            transformOrigin: "50px 50px",
            animation: "geo-rotate 32s linear infinite",
          }}
        >
          {/* Overlapping arcs — data relationship suggestion */}
          <ellipse
            cx="50"
            cy="50"
            rx="28"
            ry="16"
            stroke={color}
            strokeWidth="0.75"
            opacity="0.4"
            transform="rotate(-20, 50, 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="20"
            ry="30"
            stroke={color}
            strokeWidth="0.75"
            opacity="0.3"
            transform="rotate(35, 50, 50)"
          />

          {/* Constellation edges */}
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].cx}
              y1={NODES[a].cy}
              x2={NODES[b].cx}
              y2={NODES[b].cy}
              stroke={color}
              strokeWidth="0.7"
              opacity="0.45"
              strokeLinecap="round"
            />
          ))}

          {/* Constellation nodes — alternating pulse animations */}
          {NODES.map((node, i) => (
            <circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={color}
              opacity="0.7"
              className="geo-node"
              style={{
                animation: i % 2 === 0
                  ? `geo-pulse-a ${3.5 + i * 0.7}s ease-in-out infinite`
                  : `geo-pulse-b ${4 + i * 0.6}s ease-in-out infinite`,
              }}
            />
          ))}
        </g>
      </svg>
    </>
  );
}
