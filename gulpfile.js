var gulp = require('gulp');
var concat = require('gulp-concat-sourcemap');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var git = require('gulp-git');
var autoRestart = require('gulp-auto-restart');
autoRestart({'task': 'watch'});

var generalFrameworkScripts = [

	"./src/general-framework/plugins-and-libraries/uuid.js",
	"./src/general-framework/plugins-and-libraries/jquery.transit.min.js",
	"./src/general-framework/plugins-and-libraries/tooltipster/tooltipster.bundle.min.js",
	"./src/general-framework/plugins-and-libraries/jquery-deparam.js",
	"./src/general-framework/plugins-and-libraries/jquery.scrollTo.min.js",
	"./src/general-framework/plugins-and-libraries/jquery.jsonp-2.4.0.js",
	"./src/general-framework/js-utilities/fallback-localstorage-clear.js",
	"./src/general-framework/js-utilities/queryStringRouter.js",
	"./src/general-framework/js-utilities/reactiveLocalStorage.js",
	"./node_modules/validator/validator.js",
	"./src/general-framework/js-utilities/reactiveLocalStorageValidation.js",
	"./src/general-framework/js-utilities/webflowComponentsFixes.js",
	"./src/general-framework/js-utilities/transitions-functions-wrapper.js",
	"./src/general-framework/js-utilities/tooltipster-for-webflow.js",
	"./src/general-framework/js-utilities/modals.js",
	"./src/general-framework/js-utilities/select-dropdowns-with-state.js",
	"./src/general-framework/js-utilities/radio-buttons-binded-to-reactive-local-storage.js",
	"./src/general-framework/js-utilities/input-fields-binded-to-reactive-local-storage.js",
	"./src/general-framework/js-utilities/checkboxes-binded-to-reactive-local-storage.js",
	"./src/general-framework/js-utilities/data-binding-and-data-lists.js",
	"./src/general-framework/js-utilities/showing-or-hiding-based-on-state.js",
	"./src/general-framework/js-utilities/tabs.js",
	"./src/general-framework/js-utilities/forms.js",
	"./src/general-framework/js-utilities/initial-preloading.js",
	"./src/general-framework/js-utilities/flashing-notifications.js",
	"./src/general-framework/js-utilities/collapsible-sections.js",
	"./src/general-framework/js-utilities/eventBindingUtilities.js",
];

var mainAppScripts = [
    "./src/main-app-code/v1/general/main-navigation.js",
	//"./src/main-code/v1/features/add-your-scripts-like-this-in-features-folder.js",
];

var jsDestination = '.';

gulp.task('concatGeneralFrameworkScripts', function() {
    return gulp.src(generalFrameworkScripts)
        .pipe(concat('webflow-prototyping-framework-bundle.js'), {sourceRoot: '/'})
        .pipe(gulp.dest(jsDestination));
        // .pipe(rename('scripts.min.js'))
        // .pipe(uglify())
        // .pipe(gulp.dest(jsDestination));
});

gulp.task('concatMainAppScripts', function() {
    return gulp.src(mainAppScripts)
        .pipe(concat('webflow-prototyping-main-app-bundle.js'), {sourceRoot: '/'})
        .pipe(gulp.dest(jsDestination));
        // .pipe(rename('scripts.min.js'))
        // .pipe(uglify())
        // .pipe(gulp.dest(jsDestination));
});

gulp.task('buildScriptsThenAddAndCommit', ['concatGeneralFrameworkScripts', 'concatMainAppScripts'], function() {
    return gulp.src('.')
  		.pipe(git.add())
  		.pipe(git.commit('automatic commit from webflow-prototyping-framework'));
});

var gitPushTimer;
gulp.task('buildScriptsThenAddAndCommitThenPush', ['buildScriptsThenAddAndCommit'], function() {
	clearTimeout(gitPushTimer);
	gitPushTimer = setTimeout(function() {
		git.push('origin', 'master', function (err) {
		  if (err) throw err;
		});
	}, 500);
});

//////////

var filesToWatch = [
	"**/*.js",
	"**/*.css"
];

gulp.task('watchFilesAndAutomaticallyPushChanges', ['buildScriptsThenAddAndCommitThenPush'], function() {
  gulp.watch(filesToWatch, ['buildScriptsThenAddAndCommitThenPush']);
});