const {createProxyMiddleware} = require('http-proxy-middleware');

const setProxy = (app) =>{

    app.use(['/api','/contact'],createProxyMiddleware({
        target: 'http://localhost:5001',
        changeOrigin: true
    }))

}


module.exports = setProxy;