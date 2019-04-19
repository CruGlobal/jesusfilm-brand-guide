import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Lessons from '../components/Lessons'
import ColorSpecs from '../components/ColorSpecs'

export const StylePageTemplate = ({
  description,
  lessons,
  colorSpecs
}) => (
    <div className="section content">
      <h2>{description}</h2>
      <Lessons lessons={lessons} />
      <h2>Specs</h2>
      <ColorSpecs colorSpecs={colorSpecs} />
    </div>
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
  console.log(frontmatter.lessons)
  return (
    <Layout displayTitle={frontmatter.title}>
      <StylePageTemplate
        description={frontmatter.description}
        lessons={frontmatter.lessons}
        colorSpecs={frontmatter.specs.colors}
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
        description
        lessons {
          description
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 340, quality: 96) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
          }
          examples {
            do {
              image {
                childImageSharp {
                  fluid(maxWidth: 340, quality: 96) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
                extension
              }
            }
            donot {
              image {
                childImageSharp {
                  fluid(maxWidth: 340, quality: 96) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
                extension
              }
            }
          }
        }
        specs {
          colors {
            name
            hex
            PMS
            CMYK
            RGBA
          }
        }
      }
    }
  }
`
