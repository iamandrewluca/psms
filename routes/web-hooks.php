<?php
/** @var \Laravel\Lumen\Routing\Router $router */

use Illuminate\Http\RedirectResponse;

$router->group(['prefix' => '/webhooks', 'namespace' => 'WebHooks'], function () use ($router) {
    $router->get('/provider', function () {
        sleep(5);
        return RedirectResponse::create('/api/v1/webhooks/callback?sessionId=somegeneratedid');
    });


    /**
     * @SWG\Get(path="/api/v1/webhooks/callback",
     *   summary="Callback where provider will redirect with sessionID",
     *   @SWG\Response(
     *     response=200,
     *     description="successful operation"
     *   )
     * )
     */
    $router->get('/callback', function () {
        sleep(5);
        return RedirectResponse::create('/');
    });
});
