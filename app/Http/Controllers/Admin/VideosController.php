<?php

namespace App\Http\Controllers\Admin;


use App\Eloquent\Video;
use Illuminate\Http\Request;

class VideosController extends AdminBaseController
{
    /**
     * Create a new controller instance.
     */
    public function __construct() {}

    public function index()
    {
        return Video::all();
    }

    public function create(Request $request)
    {
        $video = new Video();
        $video->videoId = $request->input('videoId');
        $video->save();

        return $video;
    }

    public function show($id)
    {
        return Video::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $video = Video::findOrFail($id);
        $video->videoId = $request->input('videoId');
        $video->save();
        return $video;
    }

    public function delete($id)
    {
        $video = Video::findOrFail($id);
        $video->delete();
        return response()->json('success');
    }
}
