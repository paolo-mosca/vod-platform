import React from 'react'

export default class SecondaryHeader extends React.Component {
  render () {
    return (
      <div className='secondary-header'>
        <h1>Learn with chefs</h1>
        <p>Attend to our live MasterClasses or watch the recorded video</p>
        <form className='form-email'>
          <input type='email' value='' placeholder='I want to cook! Take my email!' id='email-value' required=''/>
          <input type='submit' className='btn' id='submit-email' value='Get started for FREE'/>
        </form>
      </div>
    )
  }
}
