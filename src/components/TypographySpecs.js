import React from 'react'
import PropTypes from 'prop-types'

const TypographySpecs = ({ specs }) => (
  specs.map((spec, i) => (
      <div key={i} style={{marginBottom: 15}} >
        <div style={{
          fontFamily: spec.font,
          color: `#${spec.color}`,
          fontSize: `${spec.size}${spec.unit}`,
        }}>
          {spec.name}
        </div>
        <div className="columns is-multiline is-gapless" style={{backgroundColor: '#f7f7f7', padding: 10, borderRadius: 2, marginLeft: -10}}>
          {
            spec.font &&
            <React.Fragment>
              <div className="column is-6"><h6 style={{marginBottom: 0}}>FontFamily:</h6></div>
              <div className="column is-6">{spec.font}</div>
            </React.Fragment>
          }
          {
            spec.color &&
            <React.Fragment>
              <div className="column is-6"><h6 style={{marginBottom: 0}}>Color:</h6></div>
              <div className="column is-6">#{spec.color}</div>
            </React.Fragment>
          }
          {
            spec.size &&
            <React.Fragment>
              <div className="column is-6"><h6 style={{marginBottom: 0}}>Size:</h6></div>
              <div className="column is-6">{spec.size}{spec.unit}</div>
            </React.Fragment>
          }
        </div>
      </div>
    ))
)

TypographySpecs.propTypes = {
  specs: PropTypes.arrayOf(
    PropTypes.shape({
      hex: PropTypes.string,
      name: PropTypes.string,
      RGBA: PropTypes.string,
      CMYK: PropTypes.string,
      PMS: PropTypes.string,
    })
  ),
}

export default TypographySpecs
