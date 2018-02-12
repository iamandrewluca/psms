<?php
/** @var \Laravel\Lumen\Routing\Router $router */

$router->group(['prefix' => '/consumer', 'namespace' => 'Consumer'], function () use ($router) {
    $router->post('/signin', 'AuthenticationController@signIn');
    $router->post('/signout', 'AuthenticationController@signOut');

    /**
     * @SWG\Post(path="/api/v1/consumer/signup",
     *   summary="Authenticate user",
     *   produces={"application/json"},
     *   @SWG\Response(
     *     response=200,
     *     description="successful operation"
     *   )
     * )
     */
    $router->post('/signup', 'AuthenticationController@signUp');


    $router->post('/status', 'AuthenticationController@status');

    /**
     * @SWG\Get(path="/api/v1/consumer/videos",
     *   summary="Gets a list of videos",
     *   produces={"application/json"},
     *   @SWG\Response(
     *     response=200,
     *     description="successful operation"
     *   )
     * )
     */
    $router->get('/videos', 'VideoController@index');

    /**
     * @SWG\Get(path="/api/v1/consumer/providers",
     *   summary="Get a list with all available providers mmc/mnc",
     *   produces={"application/json"},
     *   @SWG\Response(
     *     response=200,
     *     description="successful operation"
     *   )
     * )
     */
    $router->get('/providers', 'ConsumerBaseController@providers');
});
