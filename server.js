import Fastify from 'fastify'

const fastify = Fastify({
    logger: true 
})

fastify.get('/', async function handler(request, reply) {
    return {
        hello: 'Hello world'
    }
})

try {
    await fastify.listen({ 
        port: 3000
    })
}
catch (e) {
    fastify.log.error(e)
    process.exit(1)
}