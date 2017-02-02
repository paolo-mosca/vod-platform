import React, { PropTypes } from 'react'

function StepList ({ steps }) {
  return (
    <section className='steps'>
      <h5>Steps</h5>
      {steps
        .map((step, index) => {
          var {picture, description, tip} = step
          return (
            <div key={index} className = 'step'>
              <h5>{index + 1 }</h5>
              <div className='step-description'>{description}</div>
              <div className='step-tip'> {`Tip: ${tip}`}</div>
              <div className='step-picture-holder'>
                <img className='step-picture' src={`/public/img/${picture}`}/>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}
StepList.propTypes = {
  steps: PropTypes.array.isRequired
}

export default StepList
