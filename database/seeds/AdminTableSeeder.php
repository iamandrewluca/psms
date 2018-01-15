<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        (new \App\Eloquent\Admin([
            'email' => env('FIRST_ADMIN_EMAIL'),
            'password' => Hash::make(env('FIRST_ADMIN_PASSWORD')),
        ]))->save();
    }
}
