import { Link } from "react-router-dom";
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
        <ul>
          {links.map((adress, index) => (
            <li key={index}>
              <Link to={adress.to}>{adress.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
