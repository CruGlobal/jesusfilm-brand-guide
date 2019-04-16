import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const StylePageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
  url,
}) => (
  <section className="section section--gradient">
    <div className="content">
      <a href={url}>
        <h3 className="has-text-weight-semibold is-size-2">
          {heading}
        </h3>
      </a>
      <p>{description}</p>
      <Testimonials testimonials={testimonials} />
      <Features gridItems={intro.blurbs} />
    </div>
  </section>
)

StylePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
}

const StylePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout displayTitle={frontmatter.title}>
      <StylePageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

StylePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default StylePage

export const stylePageQuery = graphql`
  query stylePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 340, quality: 96) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            title
            url
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`