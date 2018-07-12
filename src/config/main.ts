export default  {
    port: process.env.PORT || 3000,
    db: {
        url: 'mongodb://test:test@ds151259.mlab.com:51259/web-app'
    },
    jwtSecret:'justsecretfornoww'
};