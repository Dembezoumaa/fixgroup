import { useState, useEffect } from 'react';
import { Icon } from './Icon.jsx';
import { branches, site } from '../data/content.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (path) => currentPath === path || (path !== '/' && currentPath.startsWith(path));

  // Voorkom scroll op body als mobiel menu open is
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className="header">
        <div className="wrap header-inner">
          <a href="/" className="logo" onClick={() => setMobileOpen(false)}>
            <span className="logo-mark"><span>FIX</span></span>
            <span className="logo-group">GROUP</span>
          </a>

          <nav className="nav" aria-label="Hoofdnavigatie">
            <a href="/" className={isActive('/') && currentPath === '/' ? 'active' : ''}>Home</a>
            <button
              type="button"
              onMouseEnter={() => setOpen(true)}
              onClick={() => setOpen(!open)}
              className={currentPath.startsWith('/diensten') ? 'active' : ''}
              aria-expanded={open}
              aria-haspopup="true"
            >
              Diensten <Icon.Chev className="chev" />
            </button>
            <a href="/werkgebied/" className={isActive('/werkgebied') ? 'active' : ''}>Werkgebied</a>
            <a href="/over-ons/" className={isActive('/over-ons') ? 'active' : ''}>Over ons</a>
            <a href="/contact/" className={isActive('/contact') ? 'active' : ''}>Contact</a>
          </nav>

          <div className="header-right">
            <a href={`tel:${site.phoneRaw}`} className="phone-pill">
              <span className="dot" /> <Icon.Phone style={{ width: 14, height: 14 }} /> {site.phone}
            </a>
            <a href="/spoed/" className="btn btn-red btn-sm">
              <Icon.Siren style={{ width: 14, height: 14 }} /> SPOED
            </a>
            <a href="/offerte/" className="btn btn-dark btn-sm">Offerte</a>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu openen"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <Icon.X style={{ width: 24, height: 24 }} /> : <Icon.Menu style={{ width: 24, height: 24 }} />}
            </button>
          </div>
        </div>

        {/* Desktop mega-menu */}
        {open && (
          <div className="mega" onMouseLeave={() => setOpen(false)}>
            <div className="mega-inner">
              {branches.map((b) => (
                <div className="mega-col" key={b.slug}>
                  <h4>
                    <span className="badge" style={{ background: b.color }} />
                    {b.name}
                  </h4>
                  <ul>
                    {b.services.slice(0, 6).map((s) => (
                      <li key={s.slug}>
                        <a href={`/diensten/${b.slug}/${s.slug}/`}>
                          <span>{s.title}{s.spoed && <span style={{ color: '#E11D2E', marginLeft: 6, fontSize: 10 }}>●</span>}</span>
                          <Icon.ArrRight className="arrow" style={{ width: 12, height: 12 }} />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a href={`/diensten/${b.slug}/`} className="col-cta">Alle diensten →</a>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            <a href="/" onClick={() => setMobileOpen(false)}>Home</a>
            <div className="mobile-section">
              <div className="mobile-section-title">Diensten</div>
              {branches.map((b) => (
                <a key={b.slug} href={`/diensten/${b.slug}/`} onClick={() => setMobileOpen(false)}>
                  <span className="mobile-dot" style={{ background: b.color }} />
                  {b.name}
                </a>
              ))}
            </div>
            <a href="/werkgebied/" onClick={() => setMobileOpen(false)}>Werkgebied</a>
            <a href="/over-ons/" onClick={() => setMobileOpen(false)}>Over ons</a>
            <a href="/contact/" onClick={() => setMobileOpen(false)}>Contact</a>
            <a href="/spoed/" onClick={() => setMobileOpen(false)} className="btn btn-red btn-lg" style={{ marginTop: 12 }}>
              <Icon.Siren style={{ width: 16, height: 16 }} /> SPOED 24/7
            </a>
            <a href={`tel:${site.phoneRaw}`} className="btn btn-dark btn-lg" style={{ marginTop: 8 }}>
              <Icon.Phone style={{ width: 16, height: 16 }} /> Bel {site.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
