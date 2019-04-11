import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const CulturePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <h1 className="heading is-size-3">
        {title}
      </h1>
      <br />
      <PageContent className="content" content={content} />
    </section>
  )
}

CulturePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CulturePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CulturePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

CulturePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CulturePage

export const culturePageQuery = graphql`
  query CulturePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
