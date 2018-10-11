import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import theme from "./defaultTheme";
import logo from './static/jfm-logo.svg';
import css from './index.css';

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
        content: pageLoader(() => import("./LOGO.md"))
      },
      {
        path: "/brandmark",
        title: "Brandmark",
        content: pageLoader(() => import("./WELCOME.md"))
      },
      {
        path: "/logo-lockups",
        title: "Logo Lockups",
        content: pageLoader(() => import("./WELCOME.md"))
      }
    ]
  },
  {
    title: "Design System",
    pages: [
      {
        path: "/colors",
        title: "Colors",
        content: pageLoader(() => import("./COLORS.md"))
      },
      {
        path: "/icons",
        title: "Icons",
        content: pageLoader(() => import("./WELCOME.md"))
      },
      {
        path: "/imagery",
        title: "Imagery",
        content: pageLoader(() => import("./WELCOME.md"))
      },
      {
        path: "/typography",
        title: "Typography",
        content: pageLoader(() => import("./TYPOGRAPHY.md"))
      }
    ]
  },
  {
    title: "Layout",
    pages: [
      {
        path: "/principles",
        title: "Principles",
        content: pageLoader(() => import("./WELCOME.md"))
      },
      {
        path: "/guidelines",
        title: "Guidelines",
        content: pageLoader(() => import("./WELCOME.md"))
      },
    ]
  },
  {
    title: "Resources",
    pages: [
      {
        path: "/resources/logo",
        title: "Logo",
        content: pageLoader(() => import("./WELCOME.md"))
      },
      {
        path: "/resources/color-palette",
        title: "Color Palette",
        content: pageLoader(() => import("./WELCOME.md"))
      },
      {
        path: "/resources/fonts",
        title: "Fonts",
        content: pageLoader(() => import("./WELCOME.md"))
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
