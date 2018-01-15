<?php

use App\Eloquent\NumberProvider;
use App\Enums\Flows;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class NumberProvidersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('number_providers')->delete();
        $json = File::get('mcc-mnc.json');
        $data = json_decode($json, true);
        foreach ($data as &$obj) {
            $obj['flow'] = Flows::getRandomValue();
        }
        NumberProvider::insert($data);
    }
}
