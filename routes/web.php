<?php

/**
 * @SWG\Info(title="PSMS", version="0.1")
 */

/** @var \Laravel\Lumen\Routing\Router $router */
$router->group([
    'prefix' => '/api/v1',
    'namespace' => 'App\Http\Controllers'
], function () use ($router) {

    require 'admin.php';
    require 'consumer.php';
    require 'web-hooks.php';

});

require 'static.php';
