module.exports = {
    env: {
        apiKey: '2fccde01a371b106b09a241d6d1d5b49',
        endPoint: 'https://api.themoviedb.org/3/',
        endPointImg: 'https://www.themoviedb.org/t/p/w300_and_h300_bestv2',
        domain: 'https://simple-blog-nu.vercel.app'
    },
    images: {
        domains: ['https://simple-blog-nu.vercel.app'],
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/home',
            },
            {
                source: '/detail/:id',
                destination: '/artikel/:id',
            },
            {
                source: '/:artikel*',
                destination: '/:artikel*',
            },
            {
                source: '/artikel/page/:artikel',
                destination: '/:artikel*',
            },
        ]
    },
  }