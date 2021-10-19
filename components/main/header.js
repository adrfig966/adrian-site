import { useEffect, useState, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ activepage }) {
  const [menudata, setMenudata] = useState({});
  const [loading, setLoading] = useState(true);
  const [showmenu, setMenuVis] = useState(false);
  const router = useRouter();

  useEffect(async () => {
    const res = await fetch(
      "https://headless.afigueroa.xyz/api/collections/get/Menus?token=account-eceb5fb49df2102a005a7b28fa1449",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filter: { Name: "Main" },
        }),
      }
    );
    const data = await res.json();
    if (data.total > 0) {
      setMenudata(data.entries[0]);
      setLoading(false);
    }
  }, []);

  if (loading) return null;

  return (
    <header
      className={`header--main ${showmenu ? "menu-open" : "menu-closed"}`}
    >
      <div className="header__container container">
        <img width="100px" src="/af.svg" />
        <div className="nav-btn" onClick={() => setMenuVis(!showmenu)}>
          <div className="btn-bar"></div>
        </div>
        <nav className="header__nav">
          <ul className="nav__container container mx-auto">
            {menudata.Pages.map((Page) => (
              <li
                key={Page._id}
                className={`nav-item ${
                  Page._id == activepage && "active-page"
                }`}
              >
                <Link href={`/${Page.link.toLowerCase()}/${Page._id}`}>
                  <a>{Page.display}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
