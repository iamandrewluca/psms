<?php

namespace App\Http\Controllers\Admin;


use App\Category;
use Illuminate\Http\Request;

class CategoriesController extends AdminBaseController
{
    /**
     * Create a new controller instance.
     */
    public function __construct() {}

    public function list()
    {
        return Category::all();
    }

    public function create(Request $request)
    {
        $category = new Category();
        $category->title = $request->input('title');
        $category->save();
        return $category;
    }

    public function show($id)
    {
        return Category::findOrFail($id);
    }

    public function update($id)
    {
        $category = Category::findOrFail($id);
        return $category;
    }

    public function delete($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return response()->json('success');
    }
}
