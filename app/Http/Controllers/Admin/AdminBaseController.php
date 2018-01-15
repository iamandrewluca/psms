<?php

namespace App\Http\Controllers\Admin;


use App\Http\Controllers\Controller;

class AdminBaseController extends Controller
{
    protected $http;

    public function __construct(\GuzzleHttp\Client $http)
    {
        $this->http = $http;
    }

    public function index()
    {
        return $this->http->get('http://nth.com/getUser');
    }
}
