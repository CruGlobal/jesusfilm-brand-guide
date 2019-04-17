import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
          {
            item.imageInfo &&
            <div style={{maxWidth: '300px'}}>
              <a href={item.url}>
                <PreviewCompatibleImage imageInfo={item.imageInfo} />
              </a>
            </div>
          }
          <h2><a href={item.url}>{item.title}</a></h2>
          <p>{item.text}</p>
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
