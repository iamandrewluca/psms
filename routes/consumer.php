<?php
/** @var \Laravel\Lumen\Routing\Router $router */

$router->group(['prefix' => '/consumer', 'namespace' => 'Consumer'], function () use ($router) {
    $router->post('/signin', 'AuthenticationController@signIn');
    $router->post('/signout', 'AuthenticationController@signOut');
    $router->post('/signup', 'AuthenticationController@signUp');
});
