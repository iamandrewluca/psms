<?php

use App\Enums\Flows;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNumberProvidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('number_providers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('network');
            $table->string('country');
            $table->string('mcc');
            $table->string('iso');
            $table->string('country_code');
            $table->string('mnc');
            $table->enum('flow', Flows::getValues());
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('number_providers');
    }
}
