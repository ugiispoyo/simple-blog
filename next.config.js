module.exports = {
    env: {
        apiKey: '2fccde01a371b106b09a241d6d1d5b49',
        endPoint: 'https://api.themoviedb.org/3/',
        endPointImg: 'https://www.themoviedb.org/t/p/w300_and_h300_bestv2'
    },
    images: {
        domains: ['localhost:3000'],
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/home',
            },
            {
                source: '/detail/:id',
                destination: '/news/:id',
            },
        ]
    },
  }