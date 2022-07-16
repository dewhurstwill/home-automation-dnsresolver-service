module.exports = {
  host: process.env.HOST || '',
  server: process.env.SERVER || '',
  serviceInfo: {
    microservice: process.env.NAME || 'Short URL Expander Service',
    routes: [{
      path: '/api/v1/health',
      methods: ['GET'],
      description: 'Returns the health status of the service'
    }, {
      path: '/api/v1/info',
      methods: ['GET'],
      description: 'Returns useful information about the service'
    }, {
      path: '/api/v1/dns/resolve/:domain',
      methods: ['GET'],
      description: '',
      params: '?help=true - Returns field descriptions'
    }],
    description: process.env.DESCRIPTION || '',
  }
}