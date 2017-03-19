// @ flow

import React from 'react'
import Helmet from 'react-helmet'

export default () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: 'The title!' },
      ]}
    />
    <p>This is my home</p>
  </div>
