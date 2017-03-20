const config = {
  jwtSecret: process.env.JWT_SECRET || 'JWT_SECRET',
  sysPassword: process.env.SYS_PASSWORD || 'SYS_PASSWORD',
}

config.env = process.env.NODE_ENV || 'development'
const envConfig = require(`./${config.env}`).default // eslint-disable-line import/no-dynamic-require

export default Object.assign(config, envConfig)
