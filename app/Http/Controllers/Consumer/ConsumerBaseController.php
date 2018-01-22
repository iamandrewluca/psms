<?php
/**
 * Created by PhpStorm.
 * User: andreiluca
 * Date: 1/4/18
 * Time: 19:53
 */

namespace App\Http\Controllers\Consumer;


use App\Eloquent\NumberProvider;
use App\Http\Controllers\BaseController;

class ConsumerBaseController extends BaseController
{
    public function providers()
    {
        return NumberProvider::all();
    }
}
