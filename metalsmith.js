/* Util
----------------------------------------------------------------- */

const task  = process.argv[2];
const shell = require('child_process').execSync;

/* Dependencies
----------------------------------------------------------------- */

const config     = require('./config');
const plugins    = require('load-metalsmith-plugins')();
const handlebars = require('handlebars');
const metalsmith = require('metalsmith')(__dirname);

/* Pipeline
----------------------------------------------------------------- */

metalsmith
    .metadata(config.metadata)
    .source(config.source)
    .destination(config.destination)
    .use(plugins.collections(config.collections))
    .use(plugins.markdown())
    .use(plugins.permalinks(config.permalinks))
    .use(plugins.layouts(config.layouts));

if ( task === 'watch' ) {
    metalsmith
        .use(plugins.serve(config.serve))
        .use(plugins.watch(config.watch));
}

/* Build
----------------------------------------------------------------- */

metalsmith.build((err) => {
    if ( err ) throw err;
    else buildCompleted();
});

const buildCompleted = () => {
    if ( task === 'build' ) {
        console.log('[DEV] Build complete!');
    }

    if ( task === 'deploy' ) {
        shell('sh ./deploy.sh');
        console.log('[DEV] Deploy complete!');
    }
}