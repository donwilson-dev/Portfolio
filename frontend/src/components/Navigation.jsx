import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import closeIcon from '../assets/icons/close.svg';
import menuIcon from '../assets/icons/menu.svg';
import { externalNavigation, primaryNavigation } from '../data/navigation.js';

const externalIcons = {
  github: githubIcon,
  linkedin: linkedinIcon,
};

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = 'site-navigation-menu';

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="site-nav page-container" aria-label="Primary navigation">
        <Link to="/" className="site-nav__brand" onClick={closeMenu}>
          donwilson-dev
        </Link>

        <button
          className="site-nav__toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls={menuId}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <img src={isMenuOpen ? closeIcon : menuIcon} alt="" aria-hidden="true" />
        </button>

        <div className="site-nav__menu" id={menuId} data-open={isMenuOpen}>
          <ul className="site-nav__links" aria-label="Portfolio pages">
            {primaryNavigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="site-nav__external-links" aria-label="Professional links">
            {externalNavigation.map((item) => (
              <li key={item.href}>
                <a
                  className="site-nav__external-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${item.label} profile, opens in a new tab`}
                >
                  <img src={externalIcons[item.icon]} alt="" aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
