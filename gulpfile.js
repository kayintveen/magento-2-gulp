/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2020 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const gulp = require('gulp');
const requireDir = require('require-dir');

const tasks = requireDir('dev/tools/gulp/tasks');

gulp.task('help', tasks.help);
gulp.task('default', tasks.default);
gulp.task('cache-clean', tasks.cacheClean);
gulp.task('clean', tasks.clean);
gulp.task('exec', tasks.exec);
gulp.task('less', tasks.less);
gulp.task('critical', tasks.critical);
gulp.task('watch-styles', tasks.watchStyles);
gulp.task('watch-scripts', tasks.watchScripts);
gulp.task('es6', tasks.es6);
gulp.task('svg', tasks.svgSprite);
