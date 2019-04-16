import React from "react";
import { Link } from "gatsby";
import logo from "../../static/img/jfm-logo.svg";

const SideBar = ({isActive}) => (
      <aside className="menu" style={{margin: 10, marginTop: 25, minHeight: 'calc(100vh - 35px)'}}>
        <Link to="/" title="Logo">
          <img src={logo} alt="JFP" style={{ width: 150 }} />
        </Link>
        <p className="menu-label">
          Culture
        </p>
        <ul className="menu-list">
          <li><Link to="/culture/mission">Mission</Link></li>
          <li><Link to="/culture/values">Values</Link></li>
          <li><Link to="/culture/voice">Voice</Link></li>
        </ul>
        <p className="menu-label">
          Work
        </p>
        <ul className="menu-list">
          <li><Link to="/work/products">Products</Link></li>
          <li><Link to="/work/tools">Tools</Link></li>
          <li><Link to="/work/processes">Processes</Link></li>
          <li><Link to="/work/team">Team Profiles</Link></li>
        </ul>
        <p className="menu-label">
          Style
        </p>
        <ul className="menu-list">
          <li><Link to="/style/colors">Colors</Link></li>
          <li><Link to="/style/typography">Typography</Link></li>
          <li><Link to="/style/buttons">Buttons</Link></li>
        </ul>
      </aside>
    );


export default SideBar;
