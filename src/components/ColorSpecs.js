import React from 'react'
import PropTypes from 'prop-types'

const ColorSpecs = ({ colorSpecs }) => (
  <div className="columns is-multiline">
    {colorSpecs.map((colorSpec, i) => (
      <div key={i} className="column is-6">
        <div style={{
          backgroundColor: `#${colorSpec.hex}`,
          height: 100,
          width: 100,
          borderRadius: '25%',
          float: 'left',
          marginRight: 10
        }} />
        <div className="columns is-multiline is-gapless">
          {
            colorSpec.name &&
            <React.Fragment>
              <div className="column is-6"><h6 style={{marginBottom: 0}}>Name:</h6></div>
              <div className="column is-6">{colorSpec.name}</div>
            </React.Fragment>
          }
          {
            colorSpec.hex &&
            <React.Fragment>
              <div className="column is-6"><h6 style={{marginBottom: 0}}>Hex:</h6></div>
              <div className="column is-6">#{colorSpec.hex}</div>
            </React.Fragment>
          }
          {
            colorSpec.RGBA &&
            <React.Fragment>
              <div className="column is-6"><h6 style={{marginBottom: 0}}>RGBA:</h6></div>
              <div className="column is-6">{colorSpec.RGBA}</div>
            </React.Fragment>
          }
          {
            colorSpec.PMS &&
            <React.Fragment>
              <div className="column is-6"><h6 style={{marginBottom: 0}}>PMS:</h6></div>
              <div className="column is-6">{colorSpec.PMS}</div>
            </React.Fragment>
          }
          {
            colorSpec.CMYK &&
            <React.Fragment>
              <div className="column is-6"><h6 style={{marginBottom: 0}}>CMYK:</h6></div>
              <div className="column is-6">{colorSpec.CMYK}</div>
            </React.Fragment>
          }
        </div>
      </div>
    ))}
  </div>
)

ColorSpecs.propTypes = {
  colorSpecs: PropTypes.arrayOf(
    PropTypes.shape({
      hex: PropTypes.string,
      name: PropTypes.string,
      RGBA: PropTypes.string,
      CMYK: PropTypes.string,
      PMS: PropTypes.string,
    })
  ),
}

export default ColorSpecs
