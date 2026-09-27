// Eight-pointed Najdi star (two interlaced squares) used as the brand mark.
// `drawn` (0..1) animates the stroke for the loader; omit it for a static mark.

const outer = 46;
const points = (offset) =>
  [0, 1, 2, 3]
    .map((k) => {
      const a = offset + (k * Math.PI) / 2;
      return `${50 + Math.cos(a) * outer},${50 + Math.sin(a) * outer}`;
    })
    .join(" ");

export default function Star({ drawn, className }) {
  const dash = 4 * outer * Math.SQRT2; // perimeter of each square
  const style =
    drawn === undefined
      ? undefined
      : { strokeDasharray: dash, strokeDashoffset: dash * (1 - drawn) };
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
      <polygon points={points(Math.PI / 4)} stroke="currentColor" strokeWidth="2" style={style} />
      <polygon points={points(0)} stroke="currentColor" strokeWidth="2" style={style} />
      <circle cx="50" cy="50" r="18" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
    </svg>
  );
}
