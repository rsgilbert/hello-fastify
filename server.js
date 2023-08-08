import Fastify from 'fastify'

const fastify = Fastify({
    logger: true 
})

fastify.get('/', async function handler(request, reply) {
    fastify.log.info('Someone wanted the endpoint /')
    return {
        hello: 'Hello world'
    }
})

fastify.route({
    method: 'GET',
    url: '/best-friend',
    schema: {
        querystring: {
            type: 'object',
            properties: {
                to: { type: 'string' }
            },
            required: ['to', 'since']
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    firstname: { type: 'string' },
                    lastname: { type: 'string'}
                },
                required: ['lastname']
            }
        }
    },
    preHandler: async (request, reply) => {
        fastify.log.info('I am the preHandler')
    },
    handler: async (request, reply) => {
        fastify.log.info('I am the handler')
        return {
            name: 'Jonah',
            firstname: 'Gilbo',
            lastnamje: 'Robo'
        }
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