'use strict'

module.exports = async function (fastify, _opts) {
  fastify.get('/', async (_request, reply) => {
    return reply.send({ register: 'Ok' })
  })
}

module.exports = async function (fastify, _opts) {
  fastify.post('/', async (request, reply) => {
    return reply.send({ data: request.body })
  })
}


module.exports.autoPrefix = '/register'
