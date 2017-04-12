// @flow

import React from 'react'

import { STATIC_PATH } from '../../config'

type Props = {
  steps: [{
    pictureUrl: string,
    description: string,
    tip: string,
  }],
};

const StepList = ({ steps }: Props) =>
  <section className="steps">
    <h5>Steps</h5>
    {steps.map(({ pictureUrl, description, tip }, idx) =>
      <div key={pictureUrl} className="step">
        <h5>{idx + 1 }</h5>
        <div className="step-description">{description}</div>l
        <div className="step-tip"> {`Tip: ${tip}`}</div>
        <div className="step-picture-holder">
          <img className="step-picture" src={`${STATIC_PATH}/img/${pictureUrl}`} alt={`step ${idx + 1}`} />
        </div>
      </div>,
    )}
  </section>

export default StepList
