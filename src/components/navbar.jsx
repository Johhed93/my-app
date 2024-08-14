import { Link } from "react-router-dom";
import "./navbar.css"
export default function Navbar() {
  const links = [
    {to:"/", name : "Home"},
    { to: "/inputWithoutForm", name: "Input without form" },
    {
      to: "/inputWithForm",
      name: "Input with form",
    },
  ];
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navlist">
          {links.map((adress, index) => (
            <li key={index}>
              <Link className="link" to={adress.to}>{adress.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
