/**
 * GlowOrb — soft radial glow blob
 *
 * A purely decorative element: a div with a radial-gradient background
 * and a heavy CSS blur filter. Sits as an absolute-positioned layer
 * behind content to add atmospheric depth to dark backgrounds.
 *
 * Design rationale:
 * - blur(80–120px) creates a wide halo without any visible edge
 * - opacity 0.12–0.18 keeps it subliminal on #080808 backgrounds
 * - No SVG needed — CSS radial-gradient achieves the effect more
 *   efficiently and allows arbitrary sizing
 *
 * Usage:
 *   <GlowOrb size={500} className="absolute -top-32 left-1/4" />
 */

interface GlowOrbProps {
  /** CSS colour string for the glow centre. Default: accent blue */
  color?: string;
  /** Diameter in px. Default: 400 */
  size?: number;
  className?: string;
}

export function GlowOrb({
  color = "#3b82f6",
  size = 400,
  className = "",
}: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
        opacity: 0.45,
        filter: `blur(${Math.round(size * 0.25)}px)`,
        /**
         * GPU-composited via filter — no layout thrashing.
         * transform: translateZ(0) ensures it stays on its own
         * compositing layer and doesn't repaint neighbours.
         */
        transform: "translateZ(0)",
        willChange: "opacity",
      }}
    />
  );
}
