'use strict';
module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		stylus: {
			options: {
				compress: false,
				banner: "/**\n * <%= pkg.name %>, version: <%= pkg.version %>" +
					"\n * Copyright 2014 <%= pkg.author %>" +
					"\n */\n"
			},
			compile: {
				files: {
					'css/examples.css': ['styl/examples.styl']
				}
			}
		},
		watch: {
			stylus: {
				files: ['styl/**/*.styl'],
				tasks: ['stylus'],
				options: {
					livereload: true
				}
			}
		}
	});

};