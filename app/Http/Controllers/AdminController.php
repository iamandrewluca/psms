<?php

namespace App\Http\Controllers;

use App\Category;

class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct() {}

    public function index()
    {
        return file_get_contents('../public/admin/index.html');
    }

    public function apiIndex()
    {
        return Category::all();
    }
}
