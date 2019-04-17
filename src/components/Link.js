import { Link as GatsbyLink } from "gatsby"
import React from 'react'

const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)
  const file = /\.[0-9a-z]+$/i.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    if (file) {
      return (
        <a href={to} {...other}>
          {children}
        </a>
      )
    }
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export default Link
