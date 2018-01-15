<?php

namespace App\Http\Controllers\Admin;


use App\Http\Controllers\Controller;

class AdminBaseController extends Controller
{
    public function index()
    {
        return [self::class, __FUNCTION__];
    }
}
