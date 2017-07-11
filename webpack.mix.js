let mix = require('laravel-mix');

mix.js('src/js/main.js', 'dist/js/')  
    .react('src/js/app.js', 'dist/js/')
    .sass('src/css/app.scss', 'dist/css/app.css');

mix.webpackConfig({
    target: "electron-renderer"
});
