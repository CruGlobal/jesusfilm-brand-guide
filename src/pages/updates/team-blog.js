import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <h1
            className="is-size-1"
          >
            JFP Team Updates
          </h1>
          <br />
          <BlogRoll />
        </section>
      </Layout>
    )
  }
}
