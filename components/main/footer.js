import { useEffect, useState, Fragment } from "react";
import Link from "next/link";

function quickLink(label, linkclass, link) {
  return (
    <li className="quick-link" key={label}>
      <a className={linkclass} href={link}>
        {label}
      </a>
    </li>
  );
}

export default function Footer({ activepage }) {
  const [menudata, setMenudata] = useState({});
  const [loading, setLoading] = useState(true);

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
    <footer className="footer--main">
      <div className="container footer__container">
        <div className="column column-start">
          <ul>
            {menudata.Quicklinks.linkedin &&
              quickLink("LinkedIn", "linkedin", menudata.Quicklinks.linkedin)}
            {menudata.Quicklinks.github &&
              quickLink("GitHub", "github", menudata.Quicklinks.github)}
          </ul>
        </div>
        <div className="column column-middle">
          <Link href="/">
            <a className="footer-logo">
              <img width="100px" src="/af.svg" />
            </a>
          </Link>
          <nav>
            <ul className="footer-nav">
              {menudata.Pages &&
                menudata.Pages.map((Page) => (
                  <li
                    className={`nav-item ${
                      Page._id == activepage && "active-page"
                    }`}
                    key={Page._id}
                  >
                    <Link href={`/${Page.link.toLowerCase()}/${Page._id}`}>
                      <a>{Page.display}</a>
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
        <div className="column column-end">
          <ul>
            {menudata.Quicklinks.email &&
              quickLink("Email", "email", menudata.Quicklinks.email)}
            {menudata.Quicklinks.resume &&
              quickLink("Resume", "resume", menudata.Quicklinks.resume)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
