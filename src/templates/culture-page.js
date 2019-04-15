import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const CulturePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
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
    <Layout displayTitle={post.frontmatter.title}>
      <CulturePageTemplate
        contentComponent={HTMLContent}
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
