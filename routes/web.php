<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/** @var \Laravel\Lumen\Routing\Router $router */
$router->group(['prefix' => '/api/v1'], function () use ($router) {

    // WEB HOOKS
    $router->group(['prefix' => '/webhooks'], function () use ($router) {

    });

    // ADMIN
    $router->group(['prefix' => '/admin', 'namespace' => 'Admin'], function () use ($router) {

        $router->get('/', 'AdminBaseController@index');

        // Categories
        $router->get('/categories', 'CategoriesController@list');
        $router->post('/categories', 'CategoriesController@create');
        $router->get('/categories/{id}', 'CategoriesController@show');
        $router->put('/categories/{id}', 'CategoriesController@update');
        $router->delete('/categories/{id}', 'CategoriesController@delete');

        // Videos
        $router->get('/videos', 'VideosController@index');
        $router->post('/videos', 'VideosController@create');
        $router->get('/videos/{id}', 'VideosController@show');
        $router->put('/videos/{id}', 'VideosController@update');
        $router->delete('/videos/{id}', 'VideosController@delete');
    });

    // USER
    $router->group(['prefix' => '/consumer', 'namespace' => 'Consumer'], function () use ($router) {
        $router->post('/signup', 'AuthenticationController@signup');
    });


    $router->get('/', 'ApplicationController@index');
    $router->get('/{any:.*}', 'ApplicationController@index');

});

$router->group(['prefix' => '/admin'], function () use ($router) {
    $router->get('/', function () {
        return file_get_contents('../public/a/index.html');
    });
    $router->get('{any:.*}', function () {
        return file_get_contents('../public/a/index.html');
    });
});
$router->get('{any:.*}', function () {
    return file_get_contents('../public/m/index.html');
});
