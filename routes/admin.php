<?php
/** @var \Laravel\Lumen\Routing\Router $router */

$router->group(['prefix' => '/admin', 'namespace' => 'Admin'], function () use ($router) {
    $router->post('/signin', 'AuthenticationController@signIn');

    $router->group(['middleware' => 'auth:admin-api'], function () use ($router) {
        $router->get('/', 'AdminBaseController@index');

        $router->post('/signout', 'AuthenticationController@signOut');

        $router->get('/updateProviders', 'AdminBaseController@updateProviders');

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
});
