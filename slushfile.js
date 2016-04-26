/*
 * slush-polymer
 * https://github.com/vtange/slush-polymer
 *
 * Copyright (c) 2016, Victor Tang
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
	gulpif = require('gulp-if'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer'),
    path = require('path');

function quoteWrap(str) {
	return '"'+str+'"';
}

function condition(file) {
	if (path.extname(file.path) === '.sh') {
        return false;
    }
	else{
		return true;
	}
}

function format(string) {
    var username = string.toLowerCase();
    return username.replace(/\s/g, '');
}

var defaults = (function () {
    var workingDirName = path.basename(process.cwd()),
      homeDir, osUserName, configFile, user;

    if (process.platform === 'win32') {
        homeDir = process.env.USERPROFILE;
        osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
    }
    else {
        homeDir = process.env.HOME || process.env.HOMEPATH;
        osUserName = homeDir && homeDir.split('/').pop() || 'root';
    }

    configFile = path.join(homeDir, '.gitconfig');
    user = {};

    if (require('fs').existsSync(configFile)) {
        user = require('iniparser').parseSync(configFile).user;
    }

    return {
        elementName: _.slugify(workingDirName),
        userName: osUserName || format(user.name || ''),
        authorName: user.name || '',
        authorEmail: user.email || ''
    };
})();

gulp.task('default', function (done) {
    var prompts = [{
        name: 'elementName',
        message: "What is your new element's name? (MUST have at least 1 '-')",
        default: defaults.elementName
    }, {
        name: 'elementDesc',
        message: 'What does your element do?'
    }, {
        name: 'authorName',
        message: 'Your name?',
        default: defaults.authorName
    }, {
        name: 'authorEmail',
        message: 'Your email?',
        default: defaults.authorEmail
    }, {
        name: 'github',
        message: 'Your github username?',
        default: defaults.userName
    }, {
        type: 'confirm',
        name: 'moveon',
        message: 'Continue?'
    }];
    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers.moveon) {
                return done();
            }
			answers.authorFullName = quoteWrap(answers.authorName);
            gulp.src([__dirname + '/templates/**', __dirname + '/templates/.*'])
                .pipe(gulpif(condition,template(answers)))
                .pipe(rename(function (file) {
                    if (file.basename[0] === '_') {
                        file.basename = '.' + file.basename.slice(1);
                    }
					if(file.basename === "seed-element") {
						file.basename = answers.elementName;
					}
                }))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('end', function () {
                    done();
                });
        });
});
