import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout displayTitle="JFP Team Updates">
        <section className="section">
          <BlogRoll />
        </section>
      </Layout>
    )
  }
}
