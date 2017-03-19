// @ flow

import React from 'react'
import Helmet from 'react-helmet'
import Message from '../Message'
import HelloButton from '../HelloButton'

export default () =>
  <div>
    <Helmet
      title={'hello page'}
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: 'The title!' },
      ]}
    />
    <Message />
    <HelloButton />
  </div>
