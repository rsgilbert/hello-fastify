// import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'

// const server: FastifyInstance = Fastify({ })

// const opts : RouteShorthandOptions = {
//     schema: {
//         response: {
//             200: {
//                 type: 'object',
//                 properties: {
//                     pong: {
//                         type: 'string'
//                     }
//                 }
//             }
//         }
//     }
// }

// server.get('/ping', opts, async (request, reply) => {
//     return {
//         pong: 'ping pong'
//     }
// })

// try {
//     await server.listen({ 
//         port: 3000
//     })
// }
// catch (e) {
//     server.log.error(e)
//     process.exit(1)
// }