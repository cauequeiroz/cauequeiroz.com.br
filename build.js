var Metalsmith  = require('metalsmith')(__dirname),
    markdown    = require('metalsmith-markdown'),
    layouts     = require('metalsmith-layouts'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    watch       = require('metalsmith-watch'),
    serve       = require('metalsmith-serve'),
    handlebars  = require('handlebars'),
    task        = process.argv[2];

Metalsmith
    .metadata({
        site: {
            name: 'Caue Queiroz',
            description: 'My personal blog about front-end development.'
        }
    })
    .source('./src')
    .destination('./public')
    .use(collections({
        articles: {
            pattern: 'articles/**/*.md',
            sortBy: 'date',
            reverse: true
        }
    }))
    .use(markdown())
    .use(permalinks({
        relative: false,
        pattern: ':title'
    }))
    .use(layouts({
        engine: 'handlebars',
        directory: './layouts',
        default: 'article.html',
        pattern: ["*/*/*html", "*/*html", "*html"],
        partials: {
            header: 'partials/header',
            footer: 'partials/footer'
        }
    }));

    if ( task === 'watch' ) {
        Metalsmith
            .use(serve({
                port: 8081,
                verbose: true
            }))
            .use(watch({
                paths: {
                    "${source}/**/*": true,
                    "layouts/**/*": "**/*"
                }
            }));
    }

Metalsmith
    .build(function(err) {
        console.log( err ? err : '[DEV] Complete!' );
    });