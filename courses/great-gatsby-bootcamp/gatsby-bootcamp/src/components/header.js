import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link
          to="/"
          className={headerStyles.title}
          activeClassName={headerStyles.activeNavItem}
        >
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              to="/blog"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
