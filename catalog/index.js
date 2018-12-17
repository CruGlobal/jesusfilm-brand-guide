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
    title: "Brandmark & Logo",
    pages: [
      {
        path: "/logo",
        title: "Logo",
        content: pageLoader(() => import("./brandmark/LOGO.md"))
      },
      {
        path: "/brandmark",
        title: "Brandmark",
        content: pageLoader(() => import("./brandmark/LOGO.md"))
      },
      {
        path: "/logo-lockups",
        title: "Logo Lockups",
        content: pageLoader(() => import("./brandmark/LOGO.md"))
      }
    ]
  },
  {
    title: "Atoms",
    pages: [
      {
        // imports: {Color: require('./specimens/Colors')},
        path: "/color",
        title: "Color",
        content: pageLoader(() => import("./atoms/Colors.js"))
      },
      {
        styles: ['/components/button.css'],
        path: "/button",
        title: "Button",
        content: pageLoader(() => import("./atoms/Buttons.js"))
      },
      {
        path: "/image",
        title: "Image",
        content: pageLoader(() => import("./atoms/IMAGE.md"))
      },
      {
        path: "/typography",
        title: "Typography",
        content: pageLoader(() => import("./atoms/TYPOGRAPHY.md"))
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
