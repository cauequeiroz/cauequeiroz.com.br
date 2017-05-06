module.exports = {
    source: './src',
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
        }
    },
    permalinks: {
        relative: false,
        pattern: ':title'
    },
    layouts: {
        engine: 'handlebars',
        directory: './layouts',
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
            "layouts/**/*": "**/*"
        }
    }
};