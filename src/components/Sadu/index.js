import "./style.css";

// Band inspired by Najdi Sadu weaving: rows of triangles and diamonds,
// recoloured in the site's green and desert gold. Drifts slowly sideways.
export default function Sadu({ className = "" }) {
  return <div className={`sadu ${className}`} aria-hidden="true" />;
}
