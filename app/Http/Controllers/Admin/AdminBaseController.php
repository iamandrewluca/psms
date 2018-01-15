<?php

namespace App\Http\Controllers\Admin;


use App\Http\Controllers\BaseController;

class AdminBaseController extends BaseController
{
    public function index()
    {
        return [self::class, __FUNCTION__];
    }
}
