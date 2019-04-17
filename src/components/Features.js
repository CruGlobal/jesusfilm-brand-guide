import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Link from './Link'
import MarkdownContent from './MarkdownContent'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
          {
            item.imageInfo &&
            <div style={{maxWidth: '300px'}}>
              <Link to={item.url}>
                <PreviewCompatibleImage imageInfo={item.imageInfo} />
              </Link>
            </div>
          }
          <h2><Link to={item.url}>{item.title}</Link></h2>
          <MarkdownContent content={item.text} />
          <Link to={item.url}>
            <p>{item.url}</p>
          </Link>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
