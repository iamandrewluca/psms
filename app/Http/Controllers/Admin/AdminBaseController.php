<?php

namespace App\Http\Controllers\Admin;


use App\Http\Controllers\BaseController;
use App\Services\NumberProviders;

class AdminBaseController extends BaseController
{
    public function index()
    {
        return [self::class, __FUNCTION__];
    }

    public function updateProviders(NumberProviders $service)
    {
        $service->update();
    }
}
