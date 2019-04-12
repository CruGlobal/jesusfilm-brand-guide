import React from "react";
import { Link } from "gatsby";
import logo from "../../static/img/jfm-logo.svg";

const SideBar = ({isActive}) => (
      <aside className="menu" style={{margin: 10, marginTop: 25}}>
        <Link to="/" title="Logo">
          <img src={logo} alt="JFP" style={{ width: 150 }} />
        </Link>
        <p className="menu-label">
          Culture
        </p>
        <ul className="menu-list">
          <li><Link to="/culture/mission">Mission</Link></li>
          <li><Link to="/culture/voice">Voice</Link></li>
          <li><Link to="/culture/international-travel">Travel</Link></li>
          <li><Link to="/culture/availability">Availability</Link></li>
        </ul>
        <p className="menu-label">
          Updates
        </p>
        <ul className="menu-list">
          <li><Link to="/updates/team-blog">Team Blog</Link></li>
        </ul>
        <p className="menu-label">
          Work
        </p>
        <ul className="menu-list">
          <li><Link to="/work/products">Products</Link></li>
          <li><Link to="/work/tools">Tools</Link></li>
          <li><Link to="/work/processes">Processes</Link></li>
          <li><Link to="/work/org-chart">Org Chart</Link></li>
        </ul>
        <p className="menu-label">
          Style
        </p>
        <ul className="menu-list">
          <li>
            <a href="#">General</a>
            <ul>
              <li><Link to="/style-guide/general/color">Colors</Link></li>
            </ul>
          </li>
          <li>
            <a href="#">Web</a>
            <ul>
              <li><Link to="/style-guide/web/typography">Typography</Link></li>
              <li><Link to="/style-guide/web/buttons">Buttons</Link></li>
            </ul>
          </li>
        </ul>
      </aside>
    );


export default SideBar;
