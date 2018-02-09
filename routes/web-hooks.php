<?php
/** @var \Laravel\Lumen\Routing\Router $router */

$router->group(['prefix' => '/webhooks', 'namespace' => 'WebHooks'], function () use ($router) {
    $router->get('/callback', 'MerchantController@msisdn');
    $router->get('/merchant/fortumo/callback', 'MerchantController@callback');
    $router->get('/merchant/fortumo/report', 'MerchantController@report');
});
