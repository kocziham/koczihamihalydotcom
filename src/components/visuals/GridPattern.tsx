/**
 * GridPattern — subtle dot-grid texture with radial fade
 *
 * Renders an SVG <pattern> of tiny crosshair marks tiled across the
 * container, masked to fade toward all four edges. Opacity is kept
 * in the 0.03–0.06 range so it reads as surface texture rather than
 * a visible design element.
 *
 * Usage:
 *   <div className="relative">
 *     <GridPattern />
 *     {children}
 *   </div>
 */

interface GridPatternProps {
  className?: string;
  /** Grid cell size in px. Default: 40 */
  cellSize?: number;
  /** Dot opacity (0–1). Default: 0.18 */
  opacity?: number;
}

export function GridPattern({
  className = "",
  cellSize = 40,
  opacity = 0.18,
}: GridPatternProps) {
  const id = "grid-dot-pattern";

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        /**
         * Radial gradient mask — full opacity in the centre,
         * fades to transparent at all four edges. This prevents
         * the grid from looking like a hard-edged rectangle.
         */
        maskImage:
          "radial-gradient(ellipse 120% 110% at 50% 50%, black 60%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 120% 110% at 50% 50%, black 60%, transparent 100%)",
      }}
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          {/*
           * Crosshair mark: two 4px lines centred in the cell.
           * Tiny enough to read as a dot from normal viewing distance,
           * but with slightly more definition than a single pixel.
           */}
          <line
            x1={cellSize / 2 - 2}
            y1={cellSize / 2}
            x2={cellSize / 2 + 2}
            y2={cellSize / 2}
            stroke="rgba(255,255,255,1)"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
          <line
            x1={cellSize / 2}
            y1={cellSize / 2 - 2}
            x2={cellSize / 2}
            y2={cellSize / 2 + 2}
            stroke="rgba(255,255,255,1)"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id})`}
        opacity={opacity}
      />
    </svg>
  );
}
