import { stack } from "../../data/profile";
import Star from "../Star";
import Sadu from "../Sadu";
import "./style.css";

const rows = [
  stack.slice(0, 3).flatMap((group) => group.items),
  [...stack.slice(3).flatMap((group) => group.items), "Google Maps", "App Store", "Google Play", "Cybersecurity"],
];

export default function Marquee() {
  return (
    <section className="marquee" aria-label="Technologies">
      <Sadu />
      {rows.map((items, r) => (
        <div className={`marquee__row ${r % 2 ? "marquee__row--reverse" : ""}`} key={r}>
          {/* Two copies so the loop is seamless; the second is decorative. */}
          {[0, 1].map((copy) => (
            <ul className="marquee__track" key={copy} aria-hidden={copy === 1}>
              {items.map((item) => (
                <li key={item}>
                  {item}
                  <Star className="marquee__star" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      ))}
      <Sadu />
    </section>
  );
}
