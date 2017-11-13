<?php namespace App;

use Illuminate\Database\Eloquent\Model;

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
