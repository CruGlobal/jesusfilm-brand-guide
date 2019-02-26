import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import theme from "./defaultTheme";
import logo from './static/jfm-logo.svg';
import css from './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLongArrowAltRight,
  faShare,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

library.add([
  faLongArrowAltRight,
  faShare,
  faHeart
])

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    title: "General",
    pages: [
      {
        path: "/general/logo",
        title: "Logo",
        content: pageLoader(() => import("./general/LOGO.md"))
      },
      {
        path: "/general/color",
        title: "Color Usage",
        content: pageLoader(() => import("./general/COLORUSAGE.md"))
      },
      {
        path: "/general/colors",
        title: "Color Specs & Downloads",
        content: pageLoader(() => import("./general/Colors.js"))
      },
    ]
  },
  {
    title: "Web",
    pages: [
      {
        styles: ['/components/button.css'],
        path: "/web/button",
        title: "Button",
        content: pageLoader(() => import("./web/Buttons.js"))
      },
      {
        path: "/web/typography",
        title: "Web Typography",
        content: pageLoader(() => import("./web/TYPOGRAPHY.md"))
      }
    ]
  },
];

ReactDOM.render(
  <Catalog
    title="BRAND GUIDE"
    pages={pages}
    theme={theme}
    logoSrc={logo}
  />,
  document.getElementById("catalog")
);
