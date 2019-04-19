import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TypographySpecs from '../components/TypographySpecs'
import MarkdownContent from '../components/MarkdownContent'

export const TypographyPageTemplate = ({
  description,
  specs
}) => (
    <div className="section content">
      <MarkdownContent content={description} />
      <h2>Specs</h2>
      <TypographySpecs specs={specs} />
    </div>
)

TypographyPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
}

const TypographyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout displayTitle={frontmatter.title}>
      <TypographyPageTemplate
        description={frontmatter.description}
        specs={frontmatter.specs.typography}
      />
    </Layout>
  )
}

TypographyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TypographyPage

export const typographyPageQuery = graphql`
  query typographyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        specs {
          typography {
            name
            size
            unit
            font
            color
          }
        }
      }
    }
  }
`
