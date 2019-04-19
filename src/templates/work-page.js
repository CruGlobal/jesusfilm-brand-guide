import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const WorkPageTemplate = ({
  image,
  title,
  heading,
  description,
  blurbs,
  main,
  testimonials,
  fullImage,
  pricing,
  url,
}) => (
  <section className="section section--gradient">
    <div className="content">
      <h3>{description}</h3>
      <Features gridItems={blurbs} />
      { testimonials &&
        <div className="section">
          <Testimonials testimonials={testimonials} />
        </div>
      }
    </div>
  </section>
)

WorkPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  blurbs: PropTypes.array,
  testimonials: PropTypes.array,
}

const WorkPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout displayTitle={frontmatter.title}>
      <WorkPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        description={frontmatter.description}
        blurbs={frontmatter.blurbs}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

WorkPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default WorkPage

export const workPageQuery = graphql`
  query WorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
        blurbs {
          text
          title
          url
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
