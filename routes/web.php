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

    $router->group(['prefix' => '/admin'], function () use ($router) {

        $router->get('/', 'Admin\AdminBaseController@index');

        // Categories
        $router->get('/categories', 'Admin\CategoriesController@list');
        $router->post('/categories', 'Admin\CategoriesController@create');
        $router->get('/categories/{id}', 'Admin\CategoriesController@show');
        $router->put('/categories/{id}', 'Admin\CategoriesController@update');
        $router->delete('/categories/{id}', 'Admin\CategoriesController@delete');

        // Videos
        $router->get('/videos', 'Admin\VideosController@list');
        $router->post('/videos', 'Admin\VideosController@create');
        $router->get('/videos/{id}', 'Admin\VideosController@show');
        $router->put('/videos/{id}', 'Admin\VideosController@update');
        $router->delete('/videos/{id}', 'Admin\VideosController@delete');
    });

    $router->get('/', 'ApplicationController@index');
});

$router->group(['prefix' => '/admin'], function () use ($router) {
    $router->get('{any:.*}', function () {
        return file_get_contents('../public/admin/index.html');
    });
});
$router->get('{any:.*}', function () {
    return file_get_contents('../public/index.html');
});
