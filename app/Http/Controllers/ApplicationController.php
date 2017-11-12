<?php

namespace App\Http\Controllers;

use App\Category;

class ApplicationController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct() {}

    public function index()
    {
        return file_get_contents('../public/index.html');
    }

    public function apiIndex()
    {
        return 'app api index';
    }
}
