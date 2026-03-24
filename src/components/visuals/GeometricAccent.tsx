/**
 * GeometricAccent — abstract topographic contour lines
 *
 * An SVG composition of:
 *   - Flowing contour/isoline curves at varying opacities
 *   - Small marker dots at key intersections
 *   - A subtle radial fade at the edges
 *
 * The topographic aesthetic nods to data landscapes and terrain mapping
 * without being a literal graph or chart.
 *
 * Animation: contour lines slowly shift with a dash-offset animation
 * and markers gently pulse. Both suppressed by prefers-reduced-motion.
 */

interface GeometricAccentProps {
  className?: string;
  /** SVG size (width = height). Default: 360 */
  size?: number;
  /** Base stroke/fill color. Default: #3b82f6 */
  color?: string;
}

export function GeometricAccent({
  className = "",
  size = 360,
  color = "#3b82f6",
}: GeometricAccentProps) {
  return (
    <>
      <style>{`
        @keyframes contour-flow {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -60; }
        }
        @keyframes marker-pulse {
          0%, 100% { opacity: 0.6; r: 1; }
          50%      { opacity: 1; r: 1.4; }
        }
        @media (prefers-reduced-motion: reduce) {
          .contour-line { animation: none !important; }
          .contour-marker { animation: none !important; }
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
        <defs>
          <radialGradient id="contour-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="85%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="contour-mask">
            <rect width="100" height="100" fill="url(#contour-fade)" />
          </mask>
        </defs>

        <g mask="url(#contour-mask)">
          {/* Contour lines — organic flowing curves */}
          {[
            { d: "M 15,50 Q 30,20 50,25 T 85,45", opacity: 0.3, delay: "0s" },
            { d: "M 10,60 Q 35,35 55,38 T 90,55", opacity: 0.25, delay: "2s" },
            { d: "M 20,70 Q 40,45 58,48 T 88,65", opacity: 0.2, delay: "4s" },
            { d: "M 12,40 Q 28,15 48,18 T 82,35", opacity: 0.35, delay: "1s" },
            { d: "M 18,80 Q 42,58 60,60 T 92,75", opacity: 0.15, delay: "3s" },
            { d: "M 8,30 Q 25,8 45,12 T 78,28", opacity: 0.2, delay: "5s" },
            { d: "M 25,88 Q 48,68 65,70 T 95,82", opacity: 0.12, delay: "6s" },
            { d: "M 5,48 Q 22,28 42,30 T 75,42", opacity: 0.28, delay: "1.5s" },
          ].map((line, i) => (
            <path
              key={i}
              d={line.d}
              stroke={color}
              strokeWidth="0.6"
              opacity={line.opacity}
              strokeLinecap="round"
              strokeDasharray="4 3"
              className="contour-line"
              style={{
                animation: `contour-flow 20s linear infinite`,
                animationDelay: line.delay,
              }}
            />
          ))}

          {/* Secondary set — perpendicular-ish curves for depth */}
          {[
            { d: "M 40,10 Q 20,35 22,55 T 38,90", opacity: 0.18, delay: "0.5s" },
            { d: "M 55,8 Q 38,30 40,50 T 52,92", opacity: 0.15, delay: "2.5s" },
            { d: "M 68,12 Q 52,32 54,52 T 65,88", opacity: 0.12, delay: "4.5s" },
            { d: "M 30,5 Q 15,28 18,48 T 28,95", opacity: 0.2, delay: "1.5s" },
            { d: "M 78,15 Q 65,38 66,55 T 76,85", opacity: 0.1, delay: "3.5s" },
          ].map((line, i) => (
            <path
              key={`v-${i}`}
              d={line.d}
              stroke={color}
              strokeWidth="0.5"
              opacity={line.opacity}
              strokeLinecap="round"
              strokeDasharray="2 4"
              className="contour-line"
              style={{
                animation: `contour-flow 25s linear infinite`,
                animationDelay: line.delay,
              }}
            />
          ))}

          {/* Intersection markers — small dots where contours conceptually cross */}
          {[
            { cx: 50, cy: 25, delay: "0s" },
            { cx: 55, cy: 38, delay: "1.2s" },
            { cx: 42, cy: 30, delay: "2.4s" },
            { cx: 60, cy: 60, delay: "0.8s" },
            { cx: 35, cy: 55, delay: "3.1s" },
            { cx: 48, cy: 48, delay: "1.8s" },
            { cx: 65, cy: 70, delay: "2.8s" },
            { cx: 28, cy: 42, delay: "0.4s" },
          ].map((marker, i) => (
            <circle
              key={`m-${i}`}
              cx={marker.cx}
              cy={marker.cy}
              r="1"
              fill={color}
              opacity="0.6"
              className="contour-marker"
              style={{
                animation: `marker-pulse ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: marker.delay,
              }}
            />
          ))}
        </g>
      </svg>
    </>
  );
}
