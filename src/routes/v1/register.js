'use strict'

module.exports = async function (fastify, _opts) {
  fastify.post('/', async (request, reply) => {
    reply.header('Keep-Alive', 'timeout=5')
    return reply.send({ data: request.body })
  })

  fastify.get('/', async (_request, reply) => {
    return reply.send({ register: 'Ok' })
  })
}

module.exports.autoPrefix = '/register'
