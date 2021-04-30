'use strict'

const { app, logger } = require('../config/appConfig')

const fastify = require('fastify')({
  logger
})

const autoLoad = require('fastify-autoload')
const path = require('path')

fastify.register(autoLoad, {
  dir: path.join(__dirname, 'routes/v1'),
  options: { prefix: '/api/v1' }
})

const start = async () => {
  try {
    await fastify.listen(app.port)
    if (app.env) console.log(`server listening on http:localhost:${app.port} env ${app.env}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
