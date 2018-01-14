<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this
            ->json('GET', '/api/v1')
            ->seeJsonEquals([[
                "id" => 1,
                "videoId" => "-er_dik3qes",
                "created_at" => "2018-01-14 19:01:08",
                "updated_at" => "2018-01-14 19:01:08"
            ]]);
    }
}
