import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Lessons = ({ lessons }) => (
    lessons.map((lesson, i) => (
      <div>
        <p>{lesson.description}</p>
        <div className="columns is-multiline">
          {
            lesson.images.map((image, i) => (
              <div key={i} className="column is-6">
                 <PreviewCompatibleImage image={image.image} />
              </div>
            ))
          }
        </div>
        {
          lesson.examples.map((example, i) => (
            <div key={i} className="">
              <h3>{example.title}</h3>
              <h6>Do</h6>
              <div className="columns is-multiline">
                {
                  example.do.map((thing, i) => (
                    <div key={i} className="column is-6">
                       <PreviewCompatibleImage image={thing.image} />
                    </div>
                  ))
                }
              </div>
              <h6>Do Not</h6>
              <div className="columns is-multiline">
                {
                  example.donot.map((thing, i) => (
                    <div key={i} className="column is-6">
                       <PreviewCompatibleImage image={thing.image} />
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    ))
)

Lessons.propTypes = {
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default Lessons
