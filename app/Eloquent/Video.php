<?php namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Video
 * @property string videoId
 * @package App\Eloquent
 */
class Video extends Model {

    protected $fillable = [];

    protected $dates = [];

    public static $rules = [
        // Validation rules
    ];

    // Relationships

//    public function category()
//    {
//        $this->hasOne('App\Category');
//    }

}
