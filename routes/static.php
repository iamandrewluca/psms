<?php
/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/admin', function () {
    return file_get_contents('../public/a/index.html');
});

$router->get('/admin/{any:.*}', function () {
    return file_get_contents('../public/a/index.html');
});

$router->get('{any:.*}', function () {
    return file_get_contents('../public/m/index.html');
});
