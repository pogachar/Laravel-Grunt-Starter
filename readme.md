# Grunt with Laravel

Initial setup of Laravel PHP framework with Grunt task runner for faster project startup.

---

## (Dev)Dependencies:

1. Laravel 4.1.*
	* phpunit/phpunit 4.0.*
	* way-generator 2.*
2. Grunt
	* grunt 0.4.4
	* grunt-contrib-concat 0.4.0
	* grunt-contrib-sass 0.7.3 (optional, compass active)
	* grunt-contrib-compass 0.7.2
	* grunt-contrib-watch 0.6.1
	* grunt-contrib-watch 0.6.1
	* grunt-phpunit 0.3.3
3. Bower
	* jQuery 2.1.0
	* font-awesome 4.0.3
4. Other
	* normalize.scss
	* media-queries.scss
	* HTML5 boilerplate
	* starter admin and public layout

---

## Installation

1. Clone the project
2. `composer install` for Laravel
3. `npm install` for Grunt dependencies
4. `bower install` for Bower dependencies
5. `grunt copy` to copy font-awesome fonts to `public/fonts`
6. `php artisa key:generate` to generate a random key
7. Setup database in `app/config/database.php`

---

## Usage

Run `artisan serve & grunt watch` to start the development server and start watching for changes with grunt.

SCSS files are included in app/assets/scss/ and are divided into main and backend. Compiled files are saved to public/css/.
JS files are included in app/assets/js/. jQuery is concatenated and copied into public/js/scripts.js.

---

### Feel free to use for your own projects

---
---

### Laravel

Documentation for the entire framework can be found on the [Laravel website](http://laravel.com/docs).

**All issues and pull requests should be filed on the [laravel/framework](http://github.com/laravel/framework) repository.**

### Grunt

Documentation can be found on the [Grunt website](http://gruntjs.com/getting-started)

### Bower

Documentation can be found on the [Bower website](http://bower.io/)