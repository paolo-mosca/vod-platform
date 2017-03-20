// @flow

const developmentConfig = {
  isLogging: true,
  shouldSeed: true,
  dbUrl: 'mongodb://localhost/keychn_dev',
  port: process.env.SERVER_PORT || 3001,
}

export default developmentConfig
