<?php

namespace App\Facades;

use App\Contracts\Logger;
use Illuminate\Support\Facades\Facade;


class MongoLog extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return Logger::class;
    }
}
