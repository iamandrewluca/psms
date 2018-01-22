<?php
/**
 * Created by PhpStorm.
 * User: andreiluca
 * Date: 1/22/18
 * Time: 01:11
 */

namespace App\Http\Controllers\Consumer;


use App\Eloquent\Video;

class VideoController extends ConsumerBaseController
{
    public function index()
    {
        return Video::all();
    }
}
