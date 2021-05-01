'use strict'

const cors = require('fastify-cors')
const helmet = require('fastify-helmet')
const { app, logger } = require('../config/appConfig')
const fastify = require('fastify')({
  logger
})

const autoLoad = require('fastify-autoload')
const path = require('path')

fastify.register(cors, {})

fastify.register(autoLoad, {
  dir: path.join(__dirname, 'routes/v1'),
  options: { prefix: '/api/v1' }
})

fastify.register(
  helmet,
  // Example disables the `contentSecurityPolicy` middleware but keeps the rest.
  { contentSecurityPolicy: false }
)

const start = async () => {
  try {
    await fastify.listen(app.port, '0.0.0.0')
    if (app.env) console.log(`server listening on http:localhost:${app.port} env ${app.env}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
