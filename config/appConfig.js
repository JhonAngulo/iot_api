const env = process.env.NODE_ENV
const log = env === 'production'
  ? false
  : {
      prettyPrint: true
    }

const config = {
  app: {
    port: process.env.PORT || 3000,
    env: env
  },
  logger: log
}

module.exports = config
