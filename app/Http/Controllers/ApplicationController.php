<?php

namespace App\Http\Controllers;


class ApplicationController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct() {}

    public function index()
    {
        return 'app api index';
    }
}
