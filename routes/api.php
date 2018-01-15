<?php
/**
 * Created by PhpStorm.
 * User: andreiluca
 * Date: 1/12/18
 * Time: 05:13
 */


/** @var \Laravel\Lumen\Routing\Router $router */

// WEB HOOKS
$router->group(['prefix' => '/webhooks'], function () use ($router) {});

// ADMIN
$router->group(['prefix' => '/admin', 'namespace' => 'Admin'], function () use ($router) {

    $router->post('/signin', 'AuthenticationController@signIn');

    $router->group(['middleware' => 'auth:admin-api'], function () use ($router) {
        $router->get('/', 'AdminBaseController@index');

        $router->post('/signout', 'AuthenticationController@signOut');

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

// USER
$router->group(['prefix' => '/consumer', 'namespace' => 'Consumer'], function () use ($router) {
    $router->post('/signin', 'AuthenticationController@signIn');
    $router->post('/signout', 'AuthenticationController@signOut');
    $router->post('/signup', 'AuthenticationController@signUp');
});


$router->get('/', 'ApplicationController@index');
$router->get('/{any:.*}', 'ApplicationController@index');
