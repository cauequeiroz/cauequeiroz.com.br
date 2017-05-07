module.exports = {
    source: './src/content',
    destination: './public',
    metadata: {
        site: {
            name: 'Caue Queiroz',
            description: 'My personal blog about front-end development.'
        }
    },
    collections: {
        articles: {
            pattern: 'articles/**/*.md',
            sortBy: 'date',
            reverse: true
        },
        homeArticles: {
            pattern: 'articles/**/*.md',
            sortBy: 'date',
            reverse: true,
            limit: 4
        }
    },
    permalinks: {
        relative: false,
        pattern: ':title'
    },
    layouts: {
        engine: 'handlebars',
        directory: './src/layouts',
        default: 'article.html',
        pattern: ["*/*/*html", "*/*html", "*html"],
        partials: {
            header: 'partials/header',
            footer: 'partials/footer'
        }
    },
    serve: {
        port: 8081,
        verbose: true
    },
    watch: {
        paths: {
            "${source}/**/*": true,
            "src/layouts/**/*": "**/*"
        }
    }
};