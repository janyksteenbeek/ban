<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        /*
         * 'uuid' => '33e2cdcd-89a8-4b8e-ba2a-221e7a14a0b9',
  'payloads' =>
  array (
    0 =>
    array (
      'type' => 'log',
      'content' =>
      array (
        'values' =>
        array (
          0 => 'Hello world!',
        ),
        'meta' =>
        array (
          0 =>
          array (
            'clipboard_data' => 'Hello world!',
          ),
        ),
      ),
      'origin' =>
      array (
        'file' => '/Users/janyksteenbeek/dev/neworei/app/Console/Commands/SendRayTestCommand.php',
        'line_number' => 28,
        'hostname' => 'mbp-janyksteenbeek.local',
      ),
    ),
  ),
  'meta' =>
  array (
    'php_version' => '8.2.10',
    'php_version_id' => 80210,
    'project_name' => NULL,
    'ray_package_version' => '1.39.0.0',
         */
        Schema::create('payloads', function (Blueprint $table) {
            $table->id();
            $table->text('message');
            $table->string('uuid');
            $table->string('type');
            $table->string('origin')->nullable();
            $table->integer('line_number')->nullable();
            $table->string('file')->nullable();
            $table->string('hostname')->nullable();
            $table->string('php_version')->nullable();
            $table->string('php_version_id')->nullable();
            $table->string('project_name')->nullable();
            $table->string('ray_package_version')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payloads');
    }
};
