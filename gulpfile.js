var gulp =  require('gulp');
var fs =require('fs');
var ipv4 = 'localhost';
var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
if (config.seleniumAddress && config.seleniumAddress.indexOf('localhost') === -1) {
    const publicIp = require('public-ip');
    publicIp.v4().then(ip => {
        ipv4 = ip;
    });
}


gulp.task('e2e-scripts', function (done) {
    var tsConfigs = {
        module: 'commonjs',
        types: ['jasmine', 'node']
    };
    var gulpObj = {
        src: ['./e2e/**/*.ts'],
        dest: './',
        base: './'
    };
    compileTSFiles(tsConfigs, gulpObj, done);
});


gulp.task('e2e-tests', function (done) {
    e2eTest('node_modules/@syncfusion/ej2-base/e2e/protractor.config.js', done);
});

function e2eTest(configFileLocation, done) {
    var browserSync = require('browser-sync');
    var bs = browserSync.create('Essential JavaScript 2 Sample');
    var options = {
        port: 6565,
        server: {
            baseDir: './',
            directory: false
        },
        ui: false,
        open: false,
        notify: false
    };
    bs.init(options, function () {
        var pNo = bs.instance.server._connectionKey.split(':');
        var currentPort = pNo[pNo.length - 1];
        var dt = { basePath: 'http://' + ipv4 + ':' + currentPort };
        fs.writeFileSync('./protractor.browser.json', JSON.stringify(dt));
        process.on('uncaughtException', function (err) {
            console.log('Caught exception: ' + err);
        });
        gulp.src(['./e2e/**/*.spec.js'])
            .pipe(require('gulp-protractor').protractor({
                configFile: configFileLocation
            }))
            .on('error', function (e) {
                console.error('Error: ' + e.message);
                //shelljs.rm('./protractor.browser.json');
                
                done();
                process.exit(1);
            })
            .on('end', function () {
                //shelljs.rm('./protractor.browser.json');
                
                done();
                process.exit(0);
            });
    });
}

gulp.task('e2e-ci-test', function (done) {
    fs.access('./e2e/tests', fs.constants.F_OK, function (error) {
        if (error) {
            console.log('E2E test not configured!');
            done();
        } else {
            var runSequence = global.runSequence = global.runSequence || require('run-sequence');
            runSequence( 'e2e-scripts', 'e2e-tests', done);
        }
    });
})
function compileTSFiles(tsConfigs, gulpObj, tsConfigPath, done) {
    var ts = require('gulp-typescript');
    // Default typescript config
    var defaultConfig = {
        typescript: require('typescript')
    };

    var args = new Array(arguments.length);
    for(var i = 0; i < args.length; ++i) {
        args[i] = arguments[i];
    }

    tsConfigs = args.shift();
    gulpObj = args.shift();
    done = args.pop();

    tsConfigPath = args.length ? args.shift() : 'tsconfig.json';

    var tsProject, tsResult;

    function refreshValue(flag) {
        // Create the typescript project
        tsProject = ts.createProject(tsConfigPath, Object.assign((flag ? { removeComments: false } : {}), defaultConfig, tsConfigs));
        // Get typescript result
        tsResult = gulp.src(gulpObj.src, { base: gulpObj.base })
            .pipe(ts(tsProject))
            .on('error', function (e) {
                done(e);
                process.exit(1);
            });
    }

    // Compile d.ts and minified files
    if (gulpObj.needDts) {
        refreshValue(true);
        tsResult.dts.pipe(gulp.dest(gulpObj.dest));
    }
    refreshValue();
    // Combine and uglify js files using webpack

    if (gulpObj.hasOwnProperty('combine')) {
        var webpackStream = require('webpack-stream');
        var webpack = require('webpack');
        tsResult.js.pipe(webpackStream({
                output: {
                    filename: `${common.currentPackage}${gulpObj.combine ? '.umd.min.js' : '.umd.js'}`,
                    libraryTarget: 'umd'
                },
                externals: (gulpObj.externals || []),
                plugins: gulpObj.combine ? [
                    new webpack.optimize.UglifyJsPlugin()
                ] : [],
                devtool: gulpObj.combine ? '' : 'inline-source-map',
            })).pipe(gulp.dest(gulpObj.dest))
            .on('end', function () {
                done();
            });
    }
    // Compile normal js files without uglification
    else {
        tsResult.js.pipe(gulp.dest(gulpObj.dest))
            .on('end', function () {
                done();
            });

    }
}
gulp.task('start', ['compile'], function(done) {
    var browserSync = require('browser-sync');
    var bs = browserSync.create('Essential JS 2');
    var options = {
        server: {
            baseDir: ['./samples', './']
        },
        ui: false
    };
    bs.init(options, done);

    /**
    * Watching typescript file changes
    */
    gulp.watch('samples/**/*.ts', ['compile', bs.reload]).on('change', reportChanges);
    gulp.watch('src/**/*.ts', ['compile', bs.reload]).on('change', reportChanges);
});

/** 
 * Compile TypeScript to JS
 */
gulp.task('compile', function(done) {
    var ts = require('gulp-typescript');
    // Default typescript config
    var defaultConfig = {
        typescript: require('typescript')
    };
    var tsProject, tsResult;
    // Create the typescript project
    tsProject = ts.createProject('tsconfig.json', defaultConfig);
    // Get typescript result
    tsResult = gulp.src(['./demos/FeatureMatrix_samples/**/**/*.ts', './src/**/*.ts'], { base: '.' })
        .pipe(ts(tsProject))
        .pipe(gulp.dest('./'))
        .on('error', function(e) {
            done(e);
            process.exit(1);
        }).on('end', function() {
            done();
        });
});

function reportChanges(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}