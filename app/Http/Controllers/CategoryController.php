<?php

namespace App\Http\Controllers;

use App\Category;

class CategoryController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        //
    }


    public function index() {
        $cat = new Category();
        $cat->title = (string)rand(0, 10);
        $cat->save();
        return Category::all();
    }
}
