<?php
/** @var \Laravel\Lumen\Routing\Router $router */

use Illuminate\Http\RedirectResponse;

$router->group(['prefix' => '/webhooks', 'namespace' => 'WebHooks'], function () use ($router) {
    $router->get('/provider', function () {
        sleep(5);
        return RedirectResponse::create('/api/v1/webhooks/callback?sessionId=somegeneratedid');
    });

    $router->get('/callback', function () {
        sleep(5);
        return RedirectResponse::create('/');
    });
});
