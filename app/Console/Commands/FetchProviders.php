<?php

namespace App\Console\Commands;

use App\Services\NumberProviders;
use Illuminate\Console\Command;
use Symfony\Component\Console\Output\ConsoleOutput;

class FetchProviders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:providers';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * The number providers service.
     *
     * @var NumberProviders
     */
    protected $service;

    /**
     * Create a new command instance.
     *
     * @param NumberProviders $service
     */
    public function __construct(NumberProviders $service)
    {
        parent::__construct();

        $this->service = $service;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->service->update();
    }
}
