import React from 'react'
import Helmet from 'react-helmet'
import SideBar from './SideBar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const Layout = ({ children, displayTitle }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/share.jpg" />
      </Helmet>
      <div className="columns is-gapless is-0">
        <div className="column is-2" style={{backgroundColor: '#F0EDE3'}}>
          <SideBar />
        </div>
        <div className="column is-10">
          <div className="wave-container">
            <div className="wave">
            </div>
            <h1 className="title is-size-1" style={{
              zIndex:100,
              position: 'absolute',
              top: 20,
              left: 85
            }}>{displayTitle}</h1>
          </div>
          <div style={{maxWidth: 860}}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
