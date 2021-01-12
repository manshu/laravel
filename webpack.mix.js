const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// Frontend
mix.js(
    "resources/js/frontend/app.js",
    "public/js/frontend/"
).postCss("resources/css/frontend/app.css", "public/css/frontend/", [
    require("tailwindcss"),
]);

// Backend
mix.js(
    "resources/js/backend/app.js",
    "public/js/backend/"
).postCss("resources/css/backend/app.css", "public/css/backend/", [
    require("tailwindcss"),
]);
