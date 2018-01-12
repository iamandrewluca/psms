<?php

namespace App\Http\Controllers;


use App\Eloquent\Video;

class ApplicationController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct() {}

    public function index()
    {
        return Video::all();
    }
}
