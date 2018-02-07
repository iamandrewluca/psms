<?php

namespace App\Http\Controllers\WebHooks;


use Illuminate\Http\JsonResponse;
use App\Http\Controllers\BaseController;
use App\Log\MongoLog;
use Illuminate\Http\Request;

class MerchantController extends BaseController
{
    /**
     * Create a new controller instance.
     */
    public function __construct() {}

    public function report(Request $request, MongoLog $logger)
    {
        $logger->log('INFO', (string)$request);
        return JsonResponse::create();
    }

    public function callback()
    {
        return 'Thank you for using our service.';
    }
}
